import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../account/account-actions/reset-password/reset-password.component';
import { NotificationService } from '@main/notification/notification.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeCardComponent, StripeFactoryService, StripeInstance } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { forkJoin } from 'rxjs';
import { AccountsService } from '@services/account/accounts.service';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss'],
})
export class Register2Component implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  stripe: StripeInstance;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };
  elementsOptions: StripeElementsOptions = {};

  public registerForm: FormGroup;
  public plan: 'sandbox';

  constructor(
    private stripeFactory: StripeFactoryService,
    public mainService: MainService,
    private titleService: Title,
    private fb: FormBuilder,
    private accountsService: AccountsService,
    public notificationService: NotificationService,
    private auth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    public loadingService: LoadingGeneralService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

  get email() {
    return this.registerForm.get('email');
  }

  get password1() {
    return this.registerForm.get('password1');
  }

  get password2() {
    return this.registerForm.get('password2');
  }

  get acceptTerms() {
    return this.registerForm.get('acceptTerms');
  }

  ngOnInit(): void {
    this.stripe = this.stripeFactory.create(environment.stripePublicKey);
    this.route.queryParams.subscribe((params) => {
      const planName = params.plan;
      if (['sandbox', 'team', 'business'].indexOf(planName) >= 0) {
        this.plan = planName;
      } else {
        this.plan = 'sandbox';
      }
    });
    this.mainService.templateClear = true;
    this.titleService.setTitle('Register v2 - Swarm IO');
    this.registerForm = this.fb.group(
      {
        plan: [this.plan, [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
        password1: [
          '',
          [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
        ],
        password2: [
          '',
          [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
        ],
        acceptTerms: [false, [Validators.requiredTrue]],
        cardComplete: [false, [Validators.requiredTrue]],
      },
      { validators: passwordsMatchValidator }
    );
  }

  register(): void {
    this.loadingService.setOptions({}).show();
    const plan = this.registerForm.get('plan')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password1')?.value;
    // forkjoin to get the recaptcha token and payment method id simultaneously so we have them both in the subscribe
    forkJoin({
      recaptcha: this.recaptchaV3Service.execute('signup'),
      paymentMethod: this.stripe.createPaymentMethod({
        type: 'card',
        card: this.card.element,
      }),
    }).subscribe(
      (result) => {
        const recaptchaToken = result.recaptcha;
        const paymentMethodId = result.paymentMethod.paymentMethod?.id;

        this.accountsService.createAccount(plan, email, password, paymentMethodId, recaptchaToken).subscribe(
          (response) => {
            // successful api call to billing-api, do the things
            this.auth
              .signInWithEmailAndPassword(email, password)
              .then((credential) => {
                // signed in, send verification email
                credential.user?.sendEmailVerification().then(() => {
                  // all done, reroute
                  this.router.navigate(['/']);
                });
              })
              .catch(() => {
                // error from firebase, lets hope we're signed in and try to redirect
                this.notifyErrorAndRedirect();
                this.loadingService.hide();
              });
          },
          (error) => {
            if (error.status === 403) {
              // recaptcha failed, show error
              this.notificationService.error(
                'We&apos;re not certain you&apos;re human, please try again later',
                'Error signing up'
              );
            } else {
              this.notifyGeneralError();
            }
            this.loadingService.hide();
          }
        );
      },
      () => {
        this.notifyGeneralError();
        this.loadingService.hide();
      }
    );
  }

  onChange(event): void {
    this.registerForm.get('cardComplete')?.setValue(event.complete);
  }

  loading(): void {
    this.loadingService.setOptions({}).show(5000);
  }

  private notifyErrorAndRedirect(): void {
    this.notificationService.error(
      'Your account was created, but there was an error signing you in. You will be redirected to login shortly',
      'Error Signing In'
    );
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 15000);
  }

  private notifyGeneralError(): void {
    this.notificationService.error('There was a problem signing you up, please try again later', 'Error signing up');
  }
}
