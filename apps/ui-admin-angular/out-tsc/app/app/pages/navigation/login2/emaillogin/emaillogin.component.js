import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
let EmailloginComponent = class EmailloginComponent {
    constructor(auth, fb, loadingService) {
        this.auth = auth;
        this.fb = fb;
        this.loadingService = loadingService;
    }
    ngOnInit() {
        this.emailSigninForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
        });
    }
    sendSigninEmail() {
        this.loadingService.setOptions({}).show();
        const email = this.emailSigninForm.get('email').value;
        const actionCodeSettings = {
            url: `${window.location}`,
            // handleCodeInApp must be true when sending email signin links
            handleCodeInApp: true,
        };
        this.auth
            .sendSignInLinkToEmail(email, actionCodeSettings)
            .then((result) => {
            this.emailSigninModal.hide();
            this.emailSigninSuccessModal.show();
        })
            .catch((error) => {
            this.emailSigninErrorModal.show();
        })
            .finally(() => {
            this.loadingService.hide();
        });
    }
    get email() {
        return this.emailSigninForm.get('email');
    }
    show() {
        this.emailSigninModal.show();
    }
    hide() {
        this.emailSigninModal.hide();
    }
};
__decorate([
    ViewChild('emailSigninModal'),
    __metadata("design:type", ModalComponent)
], EmailloginComponent.prototype, "emailSigninModal", void 0);
__decorate([
    ViewChild('emailSigninSuccessModal'),
    __metadata("design:type", ModalComponent)
], EmailloginComponent.prototype, "emailSigninSuccessModal", void 0);
__decorate([
    ViewChild('emailSigninErrorModal'),
    __metadata("design:type", ModalComponent)
], EmailloginComponent.prototype, "emailSigninErrorModal", void 0);
EmailloginComponent = __decorate([
    Component({
        selector: 'app-emaillogin',
        templateUrl: './emaillogin.component.html',
        styleUrls: ['./emaillogin.component.scss'],
    }),
    __metadata("design:paramtypes", [AngularFireAuth, FormBuilder, LoadingGeneralService])
], EmailloginComponent);
export { EmailloginComponent };
//# sourceMappingURL=emaillogin.component.js.map