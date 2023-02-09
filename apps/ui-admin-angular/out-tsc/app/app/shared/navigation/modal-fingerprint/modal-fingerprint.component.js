import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
let ModalFingerprintComponent = class ModalFingerprintComponent {
    constructor() { }
    ngOnInit() { }
    show() {
        this.modal.show();
    }
    hide() {
        this.modal.hide();
    }
};
__decorate([
    ViewChild('modal'),
    __metadata("design:type", ModalComponent)
], ModalFingerprintComponent.prototype, "modal", void 0);
ModalFingerprintComponent = __decorate([
    Component({
        selector: 'fz-modal-fingerprint',
        templateUrl: './modal-fingerprint.component.html',
        styleUrls: ['./modal-fingerprint.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], ModalFingerprintComponent);
export { ModalFingerprintComponent };
//# sourceMappingURL=modal-fingerprint.component.js.map