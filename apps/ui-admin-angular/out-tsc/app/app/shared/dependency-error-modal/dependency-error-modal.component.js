import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
let DependencyErrorModalComponent = class DependencyErrorModalComponent {
    constructor() { }
    ngOnInit() { }
    show() {
        this.sharedDependencyErrorModal.show();
    }
};
__decorate([
    ViewChild('sharedDependencyErrorModal'),
    __metadata("design:type", ModalComponent)
], DependencyErrorModalComponent.prototype, "sharedDependencyErrorModal", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DependencyErrorModalComponent.prototype, "errorMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DependencyErrorModalComponent.prototype, "dependencies", void 0);
DependencyErrorModalComponent = __decorate([
    Component({
        selector: 'app-dependency-error-modal',
        templateUrl: './dependency-error-modal.component.html',
        styleUrls: ['./dependency-error-modal.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], DependencyErrorModalComponent);
export { DependencyErrorModalComponent };
//# sourceMappingURL=dependency-error-modal.component.js.map