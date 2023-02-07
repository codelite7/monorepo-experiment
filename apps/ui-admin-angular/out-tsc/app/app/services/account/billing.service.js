import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, switchMap } from 'rxjs/operators';
const authenticatedBaseUrl = `${environment.api_base_url}/v1/authenticated/billing`;
let BillingService = class BillingService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getPaymentMethods() {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.get(`${authenticatedBaseUrl}/paymentmethods/card`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
    attachPaymentMethod(paymentMethodId) {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.post(`${authenticatedBaseUrl}/paymentmethod/${paymentMethodId}`, {}, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
    detachPaymentMethod(paymentMethodId) {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.delete(`${authenticatedBaseUrl}/paymentmethod/${paymentMethodId}`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
    setDefaultPaymentMethod(paymentMethodId) {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.put(`${authenticatedBaseUrl}/paymentmethod/${paymentMethodId}/default`, {}, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
    listInvoices() {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.get(`${authenticatedBaseUrl}/invoices`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
    getUpcomingInvoice() {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.get(`${authenticatedBaseUrl}/invoice/upcoming`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
};
BillingService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient, AngularFireAuth])
], BillingService);
export { BillingService };
//# sourceMappingURL=billing.service.js.map