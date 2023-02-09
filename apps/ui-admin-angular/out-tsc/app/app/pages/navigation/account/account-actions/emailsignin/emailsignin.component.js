import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
import { get } from 'lodash';
import { Title } from '@angular/platform-browser';
import { MainService } from '@main/main.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { NotificationService } from '@main/notification/notification.service';
let EmailsigninComponent = class EmailsigninComponent {
    constructor(activatedRoute, router, auth, fb, titleService, mainService, loadingService, notificationService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.auth = auth;
        this.fb = fb;
        this.titleService = titleService;
        this.mainService = mainService;
        this.loadingService = loadingService;
        this.notificationService = notificationService;
    }
    get email() {
        return this.emailSigninForm.get('email');
    }
    ngOnInit() {
        this.loadingService.setOptions({}).show();
        this.titleService.setTitle('Email Sign In - Swarm IO');
        this.activatedRoute.queryParams.subscribe((params) => {
            this.mode = get(params, 'mode', null);
            this.oobCode = get(params, 'oobCode', null);
            this.apiKey = get(params, 'apiKey', null);
            this.continueUrl = get(params, 'continueUrl', null);
            this.auth
                .checkActionCode(this.oobCode)
                .then(() => {
                this.oobValid = true;
                this.mainService.templateClear = true;
            })
                .catch(() => {
                this.oobValid = false;
            });
        });
        this.emailSigninForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
        });
    }
    ngAfterViewInit() {
        this.auth
            .isSignInWithEmailLink(window.location.href)
            .then((result) => {
            if (result === true) {
                this.isEmailSignInLink = true;
                // this.emailSigninModal.show();
            }
            else {
                this.router.navigate(['error/invalid-link']);
            }
        })
            .catch((error) => {
            this.router.navigate(['error/invalid-link']);
        })
            .finally(() => {
            this.loadingService.hide();
        });
    }
    signinWithEmail() {
        this.loadingService.setOptions({}).show();
        const email = this.emailSigninForm.get('email').value;
        this.auth
            .signInWithEmailLink(email, window.location.href)
            .then((result) => {
            this.router.navigate(['/console']);
        })
            .catch((error) => {
            this.notificationService.error('Ensure you entered the same email addres at which you received the login link', 'Error logging in');
        })
            .finally(() => {
            this.loadingService.hide();
        });
    }
};
__decorate([
    ViewChild('emailSigninModal'),
    __metadata("design:type", ModalComponent)
], EmailsigninComponent.prototype, "emailSigninModal", void 0);
EmailsigninComponent = __decorate([
    Component({
        selector: 'app-emailsignin',
        templateUrl: './emailsignin.component.html',
        styleUrls: ['./emailsignin.component.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AngularFireAuth,
        FormBuilder,
        Title,
        MainService,
        LoadingGeneralService,
        NotificationService])
], EmailsigninComponent);
export { EmailsigninComponent };
//# sourceMappingURL=emailsignin.component.js.map