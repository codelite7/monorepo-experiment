import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '@main/main.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from '@main/notification/notification.service';
import { get } from 'lodash';
import { FormBuilder, Validators } from '@angular/forms';
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(fb, activatedRoute, mainService, location, titleService, auth, router, notificationService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.location = location;
        this.titleService = titleService;
        this.auth = auth;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.oobCode = get(params, 'oobCode', null);
            this.apiKey = get(params, 'apiKey', null);
            this.titleService.setTitle('Reset Password - Swarm IO');
            this.auth
                .checkActionCode(this.oobCode)
                .then(() => {
                this.oobValid = true;
                this.mainService.templateClear = true;
            })
                .catch(() => {
                this.oobValid = false;
            });
            this.resetForm = this.fb.group({
                password1: [
                    '',
                    [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
                ],
                password2: [
                    '',
                    [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
                ],
            }, { validators: passwordsMatchValidator });
        });
    }
    resetPassword() {
        this.auth
            .confirmPasswordReset(this.oobCode, this.resetForm.get('password1').value)
            .then(() => {
            // successfully reset, reroute
            this.router.navigate(['']);
        })
            .catch(() => {
            this.notificationService.error('Please refresh the page and try again', 'Failed to reset password');
        });
    }
    get password1() {
        return this.resetForm.get('password1');
    }
    get password2() {
        return this.resetForm.get('password2');
    }
};
ResetPasswordComponent = __decorate([
    Component({
        selector: 'app-reset-password',
        templateUrl: './reset-password.component.html',
        styleUrls: ['./reset-password.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ActivatedRoute,
        MainService,
        Location,
        Title,
        AngularFireAuth,
        Router,
        NotificationService])
], ResetPasswordComponent);
export { ResetPasswordComponent };
export const passwordsMatchValidator = (control) => {
    const password1 = control.get('password1').value;
    const password2 = control.get('password2').value;
    if (password1 === password2) {
        return null;
    }
    else {
        return { passwordsDontMatch: true };
    }
};
//# sourceMappingURL=reset-password.component.js.map