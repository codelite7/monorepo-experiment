import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
const baseUrl = `${environment.api_base_url}/v1/authenticated/apitokens`;
let ApitokensService = class ApitokensService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getApitokens() {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.get(`${baseUrl}`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }));
    }
    createApitoken() {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            // avoiding some typescript weirdness here by not declaring a type on the post return, and using 'text' as 'text'
            // see https://github.com/angular/angular/issues/18586
            const options = {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
                responseType: 'text',
            };
            return this.http.post(`${baseUrl}`, {}, options);
        }));
    }
    deleteApitoken(apitoken) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.delete(`${baseUrl}/${apitoken}`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }));
    }
};
ApitokensService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient, AngularFireAuth])
], ApitokensService);
export { ApitokensService };
//# sourceMappingURL=apitokens.service.js.map