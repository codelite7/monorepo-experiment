import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { BillingService } from '@services/account/billing.service';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
let BillingComponent = class BillingComponent {
    constructor(mainNavService, titleService, notificationService, billingService, stripeService, fb, loadingService) {
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.notificationService = notificationService;
        this.billingService = billingService;
        this.stripeService = stripeService;
        this.fb = fb;
        this.loadingService = loadingService;
        this.cardOptions = {
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
        this.elementsOptions = {};
    }
    ngOnInit() {
        this.mainNavService.selectedItem('nav-billing');
        this.titleService.setTitle('Billing - Swarm IO');
        this.billingService.getPaymentMethods().subscribe((paymentMethods) => {
            this.paymentMethods = paymentMethods;
        }, (error) => this.notificationService.error('Failed to load payment methods, please refresh the page to try again.', 'Error'));
        this.paymentMethodForm = this.fb.group({
            cardComplete: [false, [Validators.requiredTrue]],
        });
    }
    addPaymentMethod() {
        // set loading
        this.loadingService.setOptions({}).show();
        // create payment method using stripe elements
        this.stripeService
            .createPaymentMethod({
            type: 'card',
            card: this.card.element,
        })
            .subscribe((result) => {
            // use created payment method to send request to billing-api to attach payment method to customer
            this.billingService.attachPaymentMethod(result.paymentMethod.id).subscribe(() => {
                this.refreshPaymentMethods();
                this.notificationService.success('Added payment method', 'Success');
            }, (error) => {
                this.notificationService.error('Error adding payment method, please refresh the page and try again', 'Error');
                this.loadingService.hide();
            });
        }, (error) => {
            this.notificationService.error('Error adding payment method, please refresh the page and try again', 'Error');
            this.loadingService.hide();
        });
    }
    removePaymentMethod() {
        // set loading
        this.loadingService.setOptions({}).show();
        // send request to billing api to detach payment method
        this.billingService.detachPaymentMethod(this.paymentMethodToDelete.id).subscribe(() => {
            this.notificationService.success('Removed payment method', 'Success');
            this.refreshPaymentMethods();
        }, (error) => {
            this.notificationService.error('Error removing payment method, please refresh the page and try again', 'Error');
            this.loadingService.hide();
        }, () => {
            this.paymentMethodToDelete = undefined;
        });
    }
    makeDefault(paymentMethod) {
        // set loading
        this.loadingService.setOptions({}).show();
        // send request to billing api to set default payment method
        this.billingService.setDefaultPaymentMethod(paymentMethod.id).subscribe(() => {
            this.notificationService.success('Changed default payment method', 'Success');
            this.refreshPaymentMethods();
        }, (error) => {
            this.notificationService.error('Error setting default payment method, please refresh the page and try again', 'Error');
            this.loadingService.hide();
        });
    }
    onPaymentMethodFormChange(event) {
        this.paymentMethodForm.get('cardComplete').setValue(event.complete);
    }
    refreshPaymentMethods() {
        this.billingService.getPaymentMethods().subscribe((paymentMethods) => {
            this.paymentMethods = paymentMethods;
        }, (error) => {
            this.notificationService.error('Failed to load payment methods, please refresh the page', 'Error');
        }, 
        // this is called elsewhere, so the caller shows the loading service, this should always be last though, so this hides it
        () => this.loadingService.hide());
    }
};
__decorate([
    ViewChild(StripeCardComponent),
    __metadata("design:type", StripeCardComponent)
], BillingComponent.prototype, "card", void 0);
BillingComponent = __decorate([
    Component({
        selector: 'app-billing',
        templateUrl: './billing.component.html',
        styleUrls: ['./billing.component.scss'],
    }),
    __metadata("design:paramtypes", [MainNavService,
        Title,
        NotificationService,
        BillingService,
        StripeService,
        FormBuilder,
        LoadingGeneralService])
], BillingComponent);
export { BillingComponent };
//# sourceMappingURL=billing.component.js.map