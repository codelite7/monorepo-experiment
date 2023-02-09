import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
// const authenticatedBaseUrl = `${environment.api_base_url}/v1/authenticated/webhookactions`;
const authenticatedBaseUrl = `http://localhost:1326/v1/authenticated/webhookactions`;
let WebhooksService = class WebhooksService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    createWebhookAction(webhookAction) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.post(authenticatedBaseUrl, webhookAction, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    updateWebhookAction(webhookAction) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.put(authenticatedBaseUrl, webhookAction, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    getWebhookActions() {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.get(authenticatedBaseUrl, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    getWebhookAction(id) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.get(`${authenticatedBaseUrl}/${id}`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    deleteWebhookAction(id) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.delete(`${authenticatedBaseUrl}/${id}`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
};
WebhooksService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient, AngularFireAuth])
], WebhooksService);
export { WebhooksService };
//# sourceMappingURL=webhooks.service.js.map