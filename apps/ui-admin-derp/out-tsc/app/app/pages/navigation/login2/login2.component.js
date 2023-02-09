import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NotificationService } from '@main/notification/notification.service';
let Login2Component = class Login2Component {
    constructor(fb, auth, mainService, titleService, router, notificationService) {
        this.fb = fb;
        this.auth = auth;
        this.mainService = mainService;
        this.titleService = titleService;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.mainService.templateClear = true;
        this.titleService.setTitle('Swarm IO - Log In');
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
            password: ['', [Validators.required]],
        });
    }
    login() {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;
        this.auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
            // nav to home, let router redirect however we've configured
            this.router.navigate(['/']);
        })
            .catch((error) => {
            let errorMessage;
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'This user does not exist';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'This email address is invalid';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'This account has been disabled';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Password is incorrect';
                    break;
                case 'auth/too-many-requests':
                    errorMessage = 'Too many attempts, please try again later.';
                    break;
                default:
                    errorMessage = 'Unknown error, please try,  again';
                    break;
            }
            this.notificationService.error(errorMessage);
        });
    }
};
Login2Component = __decorate([
    Component({
        selector: 'app-login2',
        templateUrl: './login2.component.html',
        styleUrls: ['./login2.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AngularFireAuth,
        MainService,
        Title,
        Router,
        NotificationService])
], Login2Component);
export { Login2Component };
//# sourceMappingURL=login2.component.js.map