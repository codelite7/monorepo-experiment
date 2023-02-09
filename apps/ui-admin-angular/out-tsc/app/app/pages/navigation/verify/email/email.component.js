import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotificationService } from '@main/notification/notification.service';
let EmailComponent = class EmailComponent {
    constructor(mainService, mainNavService, titleService, auth, notificationService) {
        this.mainService = mainService;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.auth = auth;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('');
        this.titleService.setTitle('Error - Swarm IO');
    }
    resendEmailVerification() {
        const errorMessage = 'Refresh the page and try again';
        const errorTitle = 'Error Sending Email';
        this.auth.user.subscribe((user) => {
            try {
                user
                    .sendEmailVerification()
                    .then(() => {
                    this.notificationService.success('Follow the link in the email to verify your email address', 'Email Sent!');
                })
                    .catch((e) => {
                    this.notificationService.error(errorMessage, errorTitle);
                });
            }
            catch (e) {
                this.notificationService.error(errorMessage, errorTitle);
            }
        });
    }
};
EmailComponent = __decorate([
    Component({
        selector: 'app-email',
        templateUrl: './email.component.html',
        styleUrls: ['./email.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService,
        MainNavService,
        Title,
        AngularFireAuth,
        NotificationService])
], EmailComponent);
export { EmailComponent };
//# sourceMappingURL=email.component.js.map