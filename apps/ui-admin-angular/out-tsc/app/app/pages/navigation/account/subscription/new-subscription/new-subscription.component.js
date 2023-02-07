import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { first, switchMap } from 'rxjs/operators';
import { AccountsService } from '@services/account/accounts.service';
let NewSubscriptionComponent = class NewSubscriptionComponent {
    constructor(mainService, titleService, fb, accountsService, notificationService, auth, router, stripeService) {
        this.mainService = mainService;
        this.titleService = titleService;
        this.fb = fb;
        this.accountsService = accountsService;
        this.notificationService = notificationService;
        this.auth = auth;
        this.router = router;
        this.stripeService = stripeService;
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
        this.mainService.templateClear = true;
        this.titleService.setTitle('Sign Up - Swarm IO');
        this.subscribeForm = this.fb.group({});
    }
    subscribe() {
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
        });
    }
    onChange(event) {
        this.complete = event.complete;
    }
};
__decorate([
    ViewChild(StripeCardComponent),
    __metadata("design:type", StripeCardComponent)
], NewSubscriptionComponent.prototype, "card", void 0);
NewSubscriptionComponent = __decorate([
    Component({
        selector: 'app-new-subscription',
        templateUrl: './new-subscription.component.html',
        styleUrls: ['./new-subscription.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService,
        Title,
        FormBuilder,
        AccountsService,
        NotificationService,
        AngularFireAuth,
        Router,
        StripeService])
], NewSubscriptionComponent);
export { NewSubscriptionComponent };
//# sourceMappingURL=new-subscription.component.js.map