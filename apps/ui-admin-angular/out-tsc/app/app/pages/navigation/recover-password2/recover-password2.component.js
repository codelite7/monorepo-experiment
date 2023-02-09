import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from '@main/notification/notification.service';
import { FormBuilder, Validators } from '@angular/forms';
let RecoverPassword2Component = class RecoverPassword2Component {
    constructor(fb, mainService, titleService, auth, notificationService) {
        this.fb = fb;
        this.mainService = mainService;
        this.titleService = titleService;
        this.auth = auth;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.mainService.templateClear = true;
        this.titleService.setTitle('Swarm IO - Forgot Password');
        this.resetPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
        });
    }
    sendResetEmail() {
        const email = this.resetPasswordForm.get('email').value;
        this.auth
            .sendPasswordResetEmail(email)
            .then(() => {
            this.notificationService.success('Check your email to reset your password', 'Email Sent');
        })
            .catch((error) => {
            let errorMessage;
            switch (error) {
                case 'auth/invalid-email':
                    errorMessage = 'Email address is invalid';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'Couldn&apos;t find a user with that email';
                    break;
                case 'auth/too-many-requests':
                    errorMessage = 'You&apos;re sending too many requests. Please try again later';
                    break;
                default:
                    errorMessage = 'An unknown error occurred. Please try again later';
                    break;
            }
            this.notificationService.error(errorMessage, 'Error Resetting Password');
        });
    }
};
RecoverPassword2Component = __decorate([
    Component({
        selector: 'app-recover-password2',
        templateUrl: './recover-password2.component.html',
        styleUrls: ['./recover-password2.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        MainService,
        Title,
        AngularFireAuth,
        NotificationService])
], RecoverPassword2Component);
export { RecoverPassword2Component };
//# sourceMappingURL=recover-password2.component.js.map