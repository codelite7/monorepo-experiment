import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from '@main/notification/notification.service';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { Router } from '@angular/router';
import { first, switchMap } from 'rxjs/operators';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { AccountsService } from '@services/account/accounts.service';
let PaymentComponent = class PaymentComponent {
    constructor(mainService, mainNavService, titleService, auth, notificationService, accountsService, router, stripeService, loadingService) {
        this.mainService = mainService;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.auth = auth;
        this.notificationService = notificationService;
        this.accountsService = accountsService;
        this.router = router;
        this.stripeService = stripeService;
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
        this.complete = false;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('');
        this.titleService.setTitle('Error - Swarm IO');
    }
    subscribe() {
        this.loadingService.setOptions({}).show();
        this.stripeService
            .createPaymentMethod({
            type: 'card',
            card: this.card.element,
        })
            .pipe(switchMap((result) => {
            return this.accountsService.createSubscription(result.paymentMethod.id);
        }), switchMap(() => {
            return this.auth.user;
        }), switchMap((user) => {
            return user.getIdTokenResult(true).then((token) => token);
        }), first())
            .subscribe(() => {
            this.router.navigate(['/']);
        }, (error) => {
            this.notificationService.error(error.error, 'Error');
            this.loadingService.hide();
        });
    }
    onChange(event) {
        this.complete = event.complete;
    }
};
__decorate([
    ViewChild(StripeCardComponent),
    __metadata("design:type", StripeCardComponent)
], PaymentComponent.prototype, "card", void 0);
PaymentComponent = __decorate([
    Component({
        selector: 'app-payment',
        templateUrl: './payment.component.html',
        styleUrls: ['./payment.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService,
        MainNavService,
        Title,
        AngularFireAuth,
        NotificationService,
        AccountsService,
        Router,
        StripeService,
        LoadingGeneralService])
], PaymentComponent);
export { PaymentComponent };
//# sourceMappingURL=payment.component.js.map