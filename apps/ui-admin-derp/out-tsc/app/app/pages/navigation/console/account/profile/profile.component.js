import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { finalize, first, switchMap } from 'rxjs/operators';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { AccountsService } from '@services/account/accounts.service';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
let ProfileComponent = class ProfileComponent {
    constructor(auth, mainNavService, titleService, accountsService, notificationService, loadingService) {
        this.auth = auth;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.accountsService = accountsService;
        this.notificationService = notificationService;
        this.loadingService = loadingService;
    }
    ngOnInit() {
        this.loadingService.setOptions({}).show();
        this.mainNavService.selectedItem('nav-profile');
        this.titleService.setTitle('Profile - Swarm IO');
        this.setClaims();
    }
    getTierText() {
        var _a;
        const plan = (_a = this.claims) === null || _a === void 0 ? void 0 : _a.plan;
        if (plan) {
            return plan.charAt(0).toUpperCase() + plan.slice(1);
        }
    }
    getSubscriptionStatusText() {
        var _a;
        const status = (_a = this.claims) === null || _a === void 0 ? void 0 : _a.subscriptionStatus;
        if (status) {
            if (status === 'active') {
                return 'Active';
            }
            else if (status === 'cancelled') {
                return 'Cancelled';
            }
            else {
                return 'Unknown';
            }
        }
    }
    cancelSubscription() {
        this.loadingService.setOptions({}).show();
        this.accountsService
            .cancelSubscription()
            .pipe(
        // get user
        switchMap(() => this.auth.user), 
        // get claims
        switchMap((user) => {
            return user.getIdTokenResult(true).then((tokenResult) => tokenResult.claims);
        }), 
        // once
        first(), 
        // hide loading
        finalize(() => {
            this.loadingService.hide();
        }))
            .subscribe((claims) => {
            this.claims = claims;
            this.notificationService.success('Subscription cancelled', 'Success');
        }, (error) => {
            this.notificationService.error('Refresh the page and try again', 'Error cancelling subscription');
        });
    }
    setClaims() {
        this.auth.idTokenResult
            .pipe(first(), finalize(() => {
            this.loadingService.hide();
        }))
            .subscribe((token) => {
            this.claims = token.claims;
        });
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss'],
    }),
    __metadata("design:paramtypes", [AngularFireAuth,
        MainNavService,
        Title,
        AccountsService,
        NotificationService,
        LoadingGeneralService])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map