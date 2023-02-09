import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NotificationService } from '@main/notification/notification.service';
import { StripeCardComponent, StripeFactoryService, StripeInstance } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { AccountsService } from '@services/account/accounts.service';
import { of } from 'rxjs';
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentComponent implements OnInit {
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

  complete = false;

  constructor(
    private stripeFactory: StripeFactoryService,
    public mainService: MainService,
    public mainNavService: MainNavService,
    private titleService: Title,
    public auth: AngularFireAuth,
    public notificationService: NotificationService,
    private accountsService: AccountsService,
    private router: Router,
    public loadingService: LoadingGeneralService
  ) {}

  ngOnInit(): void {
    this.stripe = this.stripeFactory.create(environment.stripePublicKey);
    this.mainNavService.selectedItem('');
    this.titleService.setTitle('Error - Swarm IO');
  }

  subscribe(): void {
    this.loadingService.setOptions({}).show();
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
            return '';
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
          this.loadingService.hide();
        }
      );
  }

  onChange(event): void {
    this.complete = event.complete;
  }
}
