import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ANIMATE } from '@services/model';
let ModalDocAnimationsComponent = class ModalDocAnimationsComponent {
    constructor() {
        this.animate = ANIMATE;
    }
    ngOnInit() { }
    show() {
        this.modal.show();
    }
};
__decorate([
    ViewChild('modal'),
    __metadata("design:type", Object)
], ModalDocAnimationsComponent.prototype, "modal", void 0);
ModalDocAnimationsComponent = __decorate([
    Component({
        selector: 'fz-modal-doc-animations',
        templateUrl: './modal-doc-animations.component.html',
        styleUrls: ['./modal-doc-animations.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], ModalDocAnimationsComponent);
export { ModalDocAnimationsComponent };
//# sourceMappingURL=modal-doc-animations.component.js.map