import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { get } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '@main/main.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from '@main/notification/notification.service';
let VerifyEmailComponent = class VerifyEmailComponent {
    constructor(activatedRoute, mainService, location, titleService, auth, router, notificationService) {
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
            this.mainService.templateClear = true;
            this.titleService.setTitle('Verify Email Address - Swarm IO');
            this.auth
                .applyActionCode(this.oobCode)
                .then(() => {
                // successfully applied the code, reroute
                this.auth.user.subscribe((user) => {
                    user.reload().then(() => {
                        this.router.navigate(['/']);
                    });
                });
            })
                .catch(() => {
                this.oobValid = false;
            });
        });
    }
    sendVerificationEmail() {
        this.auth.user.subscribe((user) => {
            try {
                user.sendEmailVerification().catch(() => {
                    this.notificationService.error('Please try again later', 'Failed to send email');
                });
            }
            catch (e) {
                this.notificationService.error('Please try again later', 'Failed to send email');
            }
        });
    }
};
VerifyEmailComponent = __decorate([
    Component({
        selector: 'app-verify-email',
        templateUrl: './verify-email.component.html',
        styleUrls: ['./verify-email.component.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        MainService,
        Location,
        Title,
        AngularFireAuth,
        Router,
        NotificationService])
], VerifyEmailComponent);
export { VerifyEmailComponent };
//# sourceMappingURL=verify-email.component.js.map