import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
// const authenticatedBaseUrl = `${environment.api_base_url}/v1/authenticated/pipelines`;
const authenticatedBaseUrl = `http://localhost:1323/v1/authenticated/pipelines`;
let PipelineServiceService = class PipelineServiceService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    createPipeline(pipeline) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.post(authenticatedBaseUrl, pipeline, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    updatePipeline(pipeline) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.put(authenticatedBaseUrl, pipeline, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    getPipelines() {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.get(authenticatedBaseUrl, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    getPipeline(id) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.get(`${authenticatedBaseUrl}/${id}`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
    deletePipeline(id) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.delete(`${authenticatedBaseUrl}/${id}`, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }), first());
    }
};
PipelineServiceService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient, AngularFireAuth])
], PipelineServiceService);
export { PipelineServiceService };
//# sourceMappingURL=pipeline-service.service.js.map