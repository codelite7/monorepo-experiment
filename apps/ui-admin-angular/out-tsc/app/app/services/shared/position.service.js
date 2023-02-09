import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, switchMap } from 'rxjs/operators';
import moment from 'moment';
const authenticatedBaseUrl = `${environment.api_base_url}/v1/authenticated/position`;
export var PositionType;
(function (PositionType) {
    PositionType["LastReceived"] = "lastReceived";
    PositionType["DeliverAll"] = "deliverAll";
    PositionType["SequenceNumber"] = "sequenceNumber";
    PositionType["Time"] = "time";
    PositionType["TimeDelta"] = "timeDelta";
})(PositionType || (PositionType = {}));
let PositionService = class PositionService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    resetPosition(id, request) {
        return this.auth.idToken.pipe(first(), switchMap((token) => {
            return this.http.post(`${authenticatedBaseUrl}/reset?id=${id}`, request, {
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`,
                }),
            });
        }));
    }
    parseTimestamp(timestamp) {
        let parsedValue;
        // try string first
        parsedValue = moment(timestamp).toISOString();
        // if null try unix format
        if (parsedValue === null) {
            parsedValue = moment.unix(Number(timestamp)).toISOString();
        }
        return parsedValue;
    }
};
PositionService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient, AngularFireAuth])
], PositionService);
export { PositionService };
//# sourceMappingURL=position.service.js.map