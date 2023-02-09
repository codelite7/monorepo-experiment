import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { passwordsMatchValidator } from '../../../account/account-actions/reset-password/reset-password.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { finalize, first, map, switchMap } from 'rxjs/operators';
import { UsersService } from '@services/security/users.service';
import { Router } from '@angular/router';
let ChangepasswordComponent = class ChangepasswordComponent {
    constructor(mainNavService, titleService, notificationService, fb, loadingService, auth, usersService, router) {
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.notificationService = notificationService;
        this.fb = fb;
        this.loadingService = loadingService;
        this.auth = auth;
        this.usersService = usersService;
        this.router = router;
        this.redirectAfterChange = false;
    }
    get password1() {
        return this.changePasswordForm.get('password1');
    }
    get password2() {
        return this.changePasswordForm.get('password2');
    }
    ngOnInit() {
        this.mainNavService.selectedItem('nav-changepassword');
        this.titleService.setTitle('Change Password - Swarm IO');
        this.changePasswordForm = this.fb.group({
            password1: [
                '',
                [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
            ],
            password2: [
                '',
                [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
            ],
        }, { validators: passwordsMatchValidator });
        // check token, to see if password reset is required
        this.auth.idTokenResult
            .pipe(first(), map((token) => {
            var _a;
            if (((_a = token.claims) === null || _a === void 0 ? void 0 : _a.requirePasswordReset) === true) {
                return true;
            }
            else {
                return false;
            }
        }))
            .subscribe((requirePasswordReset) => {
            if (requirePasswordReset === true) {
                this.redirectAfterChange = true;
                this.header = 'Password change required';
            }
            else {
                this.redirectAfterChange = false;
                this.header = 'Change your password';
            }
        });
    }
    changePassword() {
        const password = this.changePasswordForm.get('password1').value;
        this.changePasswordForm.reset();
        this.loadingService.setOptions({}).show();
        // changing a password destroys the session, so need to reauthenticate afterwards
        this.usersService
            .changePassword(password)
            .pipe(
        // need first otherwise we get the user every time it changes, which it does repeatedly with the next call, resulting in a loop
        switchMap(() => {
            return this.auth.user;
        }), first(), switchMap((user) => {
            return this.auth.signInWithEmailAndPassword(user.email, password).then(() => {
                return true;
            });
        }), finalize(() => {
            this.loadingService.hide();
        }))
            .subscribe(() => {
            this.notificationService.success('Password has been changed', 'Success');
            if (this.redirectAfterChange === true) {
                this.router.navigate(['/console']);
            }
        }, (error) => {
            this.notificationService.error('Refresh the page to try again', 'Error changing password');
        });
    }
};
ChangepasswordComponent = __decorate([
    Component({
        selector: 'app-changepassword',
        templateUrl: './changepassword.component.html',
        styleUrls: ['./changepassword.component.scss'],
    }),
    __metadata("design:paramtypes", [MainNavService,
        Title,
        NotificationService,
        FormBuilder,
        LoadingGeneralService,
        AngularFireAuth,
        UsersService,
        Router])
], ChangepasswordComponent);
export { ChangepasswordComponent };
//# sourceMappingURL=changepassword.component.js.map