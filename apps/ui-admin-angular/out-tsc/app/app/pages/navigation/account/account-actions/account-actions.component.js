import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { get } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
let AccountActionsComponent = class AccountActionsComponent {
    constructor(activatedRoute, router, auth, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.auth = auth;
        this.fb = fb;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.mode = get(params, 'mode', null);
            this.oobCode = get(params, 'oobCode', null);
            this.apiKey = get(params, 'apiKey', null);
            this.continueUrl = get(params, 'continueUrl', null);
            this.valid = Boolean((this.mode === 'resetPassword' || this.mode === 'verifyEmail' || this.mode === 'signIn') &&
                this.oobCode &&
                this.apiKey);
            if (this.valid) {
                // if the link is valid, redirect to the proper action
                this.router.navigate([`${this.mode.toLowerCase()}`], {
                    queryParams: {
                        mode: this.mode,
                        oobCode: this.oobCode,
                        apiKey: this.apiKey,
                    },
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                // link is invalid, redirect to invalid link
                this.router.navigate(['error/invalid-link']);
            }
        });
    }
};
AccountActionsComponent = __decorate([
    Component({
        selector: 'app-account-actions',
        templateUrl: './account-actions.component.html',
        styleUrls: ['./account-actions.component.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AngularFireAuth,
        FormBuilder])
], AccountActionsComponent);
export { AccountActionsComponent };
//# sourceMappingURL=account-actions.component.js.map