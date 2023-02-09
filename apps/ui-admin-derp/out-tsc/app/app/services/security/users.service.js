import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
const baseUrl = `${environment.api_base_url}/v1/authenticated/users`;
let UsersService = class UsersService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    listUsers() {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.get(baseUrl, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
    inviteUser(email) {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.post(`${baseUrl}/invite`, {
                email,
            }, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }), switchMap((user) => {
            // action code settings, see https://firebase.google.com/docs/auth/web/passing-state-in-email-actions#passing_statecontinue_url_in_email_actions
            const actionCodeSettings = {
                url: `${window.location}`,
                // handleCodeInApp must be true when sending email signin links
                handleCodeInApp: true,
            };
            return this.auth.sendSignInLinkToEmail(user.email, actionCodeSettings);
        }));
    }
    changePassword(password) {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            return this.http.post(`${baseUrl}/changepassword`, {
                password,
            }, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
            });
        }));
    }
    deleteUser(email) {
        return this.auth.idTokenResult.pipe(first(), switchMap((token) => {
            const options = {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token.token}`,
                }),
                body: {
                    email,
                },
            };
            return this.http.delete(baseUrl, options);
        }));
    }
};
UsersService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient, AngularFireAuth])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map