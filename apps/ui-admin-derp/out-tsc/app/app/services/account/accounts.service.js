import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { first, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
const unauthenticatedBaseUrl = `${environment.api_base_url}/v1/accounts`;
const authenticatedBaseUrl = `${environment.api_base_url}/v1/authenticated/accounts`;
let AccountsService = class AccountsService {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    createAccount(plan, email, password, paymentMethodId, recaptchaToken) {
        const body = {
            plan,
            email,
            password,
            paymentMethodId,
        };
        return this.http.post(`${unauthenticatedBaseUrl}`, body, {
            observe: 'response',
            responseType: 'text',
            params: {
                recaptchaV3Token: recaptchaToken,
            },
        });
    }
    createSubscription(paymentMethodId) {
        return this.auth.user.pipe(switchMap((user) => {
            return user.getIdToken().then((token) => token);
        }), switchMap((token) => {
            return this.http.post(`${authenticatedBaseUrl}/subscription`, {}, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
                observe: 'response',
                params: new HttpParams().set('paymentMethodId', paymentMethodId),
            });
        }));
    }
    cancelSubscription() {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.delete(`${authenticatedBaseUrl}/subscription`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }));
    }
};
AccountsService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [AngularFireAuth, HttpClient])
], AccountsService);
export { AccountsService };
//# sourceMappingURL=accounts.service.js.map