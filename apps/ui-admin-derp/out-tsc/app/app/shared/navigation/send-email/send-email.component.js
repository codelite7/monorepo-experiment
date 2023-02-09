import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FloatingCardService } from '@main/floating-card/floating-card.service';
let SendEmailComponent = class SendEmailComponent {
    constructor(floatingCardService) {
        this.floatingCardService = floatingCardService;
        this.floatingCard = false;
        this.email = '';
        this.form = {
            email: '',
            subject: '',
            message: '',
        };
    }
    ngOnInit() {
        this.form.email = this.email;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SendEmailComponent.prototype, "floatingCard", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SendEmailComponent.prototype, "email", void 0);
SendEmailComponent = __decorate([
    Component({
        selector: 'fz-send-email',
        templateUrl: './send-email.component.html',
        styleUrls: ['./send-email.component.scss'],
    }),
    __metadata("design:paramtypes", [FloatingCardService])
], SendEmailComponent);
export { SendEmailComponent };
//# sourceMappingURL=send-email.component.js.map