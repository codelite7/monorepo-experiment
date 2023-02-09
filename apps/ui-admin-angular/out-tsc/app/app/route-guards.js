import { __decorate, __metadata } from "tslib";
import { map, mergeMap } from 'rxjs/operators';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
export const redirectLoggedInToDashboard = () => redirectLoggedInTo(['console/dashboard']);
const changePasswordPath = '/console/account/changepassword';
const accountPath = '/console/account';
export const verifyEmailGuard = () => map((user) => {
    if (!user) {
        // no user, redirect to login
        return ['/login'];
    }
    else if (user.emailVerified) {
        // authenticated verified user, redirect to home
        return ['/'];
    }
    else {
        // show page
        return true;
    }
});
export const newSubscriptionGuard = () => mergeMap((user) => {
    if (!user || !user.emailVerified) {
        // redirect unauthorized or unverified to root, which will reroute accordingly
        return ['/'];
    }
    else {
        // authenticated and verified user, if they don't need to subscribe, redirect to root
        return user.getIdTokenResult().then((token) => {
            var _a;
            const subscriptionStatus = (_a = token.claims) === null || _a === void 0 ? void 0 : _a.subscriptionStatus;
            if (subscriptionStatus !== 'needed') {
                // redirect to root
                return ['/'];
            }
            else {
                return true;
            }
        });
    }
});
let ConsoleGuard = class ConsoleGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivateChild(childRoute, state) {
        return combineLatest([this.auth.user, this.auth.idTokenResult]).pipe(map(([user, idTokenResult]) => {
            var _a, _b;
            if (!user) {
                // no user, redirect to login
                return this.router.createUrlTree(['/login']);
            }
            else if (user && !user.emailVerified) {
                // user, but not verified, redirect to verify-email
                return this.router.createUrlTree(['/verify/email']);
            }
            else {
                const subscriptionStatus = (_a = idTokenResult.claims) === null || _a === void 0 ? void 0 : _a.subscriptionStatus;
                const requirePasswordReset = (_b = idTokenResult.claims) === null || _b === void 0 ? void 0 : _b.requirePasswordReset;
                if (subscriptionStatus === 'cancelled') {
                    // subscription has been cancelled, only allow /console/account path
                    if (state.url.startsWith(accountPath)) {
                        // allowed
                        return true;
                    }
                    else {
                        // redirect to profile
                        return this.router.createUrlTree(['/console/account/profile']);
                    }
                }
                else if (subscriptionStatus === 'needed') {
                    // verified user, no subscription yet
                    return this.router.createUrlTree(['/verify/payment']);
                    // check router state, since we're redirecting from /console pages to /console/account/changepassword in the next block
                    // you can get in an infinite loop
                }
                else if (requirePasswordReset === true && state.url !== changePasswordPath) {
                    // invited user, needs to reset password
                    return this.router.createUrlTree([changePasswordPath]);
                }
                else {
                    // verified, subscribed, all good
                    return true;
                }
            }
        }));
    }
};
ConsoleGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router, AngularFireAuth])
], ConsoleGuard);
export { ConsoleGuard };
//# sourceMappingURL=route-guards.js.map