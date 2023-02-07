import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { BillingService } from '@services/account/billing.service';
import { StripeCardComponent, StripeFactoryService, StripeInstance } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { PaymentMethod } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  stripe: StripeInstance;
  paymentMethods: PaymentMethod[];
  paymentMethodToDelete: PaymentMethod | undefined;
  public paymentMethodForm: FormGroup;

  // stripe elements
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
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

  constructor(
    private stripeFactory: StripeFactoryService,
    public mainNavService: MainNavService,
    private titleService: Title,
    private notificationService: NotificationService,
    private billingService: BillingService,
    private fb: FormBuilder,
    public loadingService: LoadingGeneralService
  ) {}

  ngOnInit(): void {
    this.stripe = this.stripeFactory.create(this.environment.stripePublicKey);
    this.mainNavService.selectedItem('nav-billing');
    this.titleService.setTitle('Billing - Swarm IO');
    this.billingService.getPaymentMethods().subscribe(
      (paymentMethods) => {
        this.paymentMethods = paymentMethods;
      },
      (error) =>
        this.notificationService.error('Failed to load payment methods, please refresh the page to try again.', 'Error')
    );
    this.paymentMethodForm = this.fb.group({
      cardComplete: [false, [Validators.requiredTrue]],
    });
  }

  addPaymentMethod() {
    // set loading
    this.loadingService.setOptions({}).show();
    // create payment method using stripe elements
    this.stripe
      .createPaymentMethod({
        type: 'card',
        card: this.card.element,
      })
      .subscribe(
        (result) => {
          // use created payment method to send request to billing-api to attach payment method to customer
          this.billingService.attachPaymentMethod(result.paymentMethod?.id).subscribe(
            () => {
              this.refreshPaymentMethods();
              this.notificationService.success('Added payment method', 'Success');
            },
            (error) => {
              this.notificationService.error(
                'Error adding payment method, please refresh the page and try again',
                'Error'
              );
              this.loadingService.hide();
            }
          );
        },
        (error) => {
          this.notificationService.error('Error adding payment method, please refresh the page and try again', 'Error');
          this.loadingService.hide();
        }
      );
  }

  removePaymentMethod() {
    // set loading
    this.loadingService.setOptions({}).show();
    // send request to billing api to detach payment method
    this.billingService.detachPaymentMethod(this.paymentMethodToDelete?.id).subscribe(
      () => {
        this.notificationService.success('Removed payment method', 'Success');
        this.refreshPaymentMethods();
      },
      (error) => {
        this.notificationService.error('Error removing payment method, please refresh the page and try again', 'Error');
        this.loadingService.hide();
      },
      () => {
        this.paymentMethodToDelete = undefined;
      }
    );
  }

  makeDefault(paymentMethod: any) {
    // set loading
    this.loadingService.setOptions({}).show();
    // send request to billing api to set default payment method
    this.billingService.setDefaultPaymentMethod(paymentMethod.id).subscribe(
      () => {
        this.notificationService.success('Changed default payment method', 'Success');
        this.refreshPaymentMethods();
      },
      (error) => {
        this.notificationService.error(
          'Error setting default payment method, please refresh the page and try again',
          'Error'
        );
        this.loadingService.hide();
      }
    );
  }

  onPaymentMethodFormChange(event): void {
    this.paymentMethodForm.get('cardComplete')?.setValue(event.complete);
  }

  refreshPaymentMethods(): void {
    this.billingService.getPaymentMethods().subscribe(
      (paymentMethods) => {
        this.paymentMethods = paymentMethods;
      },
      (error) => {
        this.notificationService.error('Failed to load payment methods, please refresh the page', 'Error');
      },
      // this is called elsewhere, so the caller shows the loading service, this should always be last though, so this hides it
      () => this.loadingService.hide()
    );
  }
}
