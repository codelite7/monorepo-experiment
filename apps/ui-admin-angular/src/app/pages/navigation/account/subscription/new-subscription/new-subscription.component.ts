import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { StripeCardComponent, StripeFactoryService, StripeInstance } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { first, switchMap } from 'rxjs/operators';
import { AccountsService } from '@services/account/accounts.service';
import { of } from 'rxjs';
import { environment } from "../../../../../../environments/environment";

@Component({
  selector: 'app-new-subscription',
  templateUrl: './new-subscription.component.html',
  styleUrls: ['./new-subscription.component.scss'],
})
export class NewSubscriptionComponent implements OnInit {
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

  subscribeForm: FormGroup;
  complete = false;

  constructor(
    private stripeFactory: StripeFactoryService,
    public mainService: MainService,
    private titleService: Title,
    private fb: FormBuilder,
    private accountsService: AccountsService,
    public notificationService: NotificationService,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.stripe = this.stripeFactory.create(environment.stripePublicKey);
    this.mainService.templateClear = true;
    this.titleService.setTitle('Sign Up - Swarm IO');
    this.subscribeForm = this.fb.group({});
  }

  subscribe(): void {
    this.stripe
      .createPaymentMethod({
        type: 'card',
        card: this.card.element,
      })
      .pipe(
        switchMap((result) => {
          if (result.paymentMethod?.id) {
            return this.accountsService.createSubscription(result.paymentMethod.id);
          } else {
            return of('');
          }
        }),
        switchMap(() => {
          return this.auth.user;
        }),
        switchMap((user) => {
          if (user) {
            return user.getIdTokenResult(true).then((token) => token);
          } else {
            return of('');
          }
        }),
        first()
      )
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.notificationService.error(error.error, 'Error');
        }
      );
  }

  onChange(event): void {
    this.complete = event.complete;
  }
}
