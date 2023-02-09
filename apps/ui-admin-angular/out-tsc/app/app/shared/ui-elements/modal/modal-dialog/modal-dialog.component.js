import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalComponent } from '../modal.component';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
let ModalDialogComponent = class ModalDialogComponent {
    constructor(mainService, colorConfigService) {
        this.mainService = mainService;
        this.colorConfigService = colorConfigService;
        this.closeFloating = true;
        this.confirmClose = false;
        this.confirmLoading = false;
        this.confirmNotification = false;
        this.loadingBody = false;
        this.notificationBody = false;
        this.animationIcon = 'swing';
        this.paddingBody = true;
        this.footerPosition = 'center';
        this.borderFooter = true;
        this.onConfirm = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.showIcon = true;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        var _a, _b;
        this.showIcon = ((_b = (_a = this.iconEl) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.childNodes.length) > 0 ? true : false;
    }
    show() {
        this.modal.show();
        this.onShow.emit(true);
    }
    hide() {
        this.modal.hide();
        this.onHide.emit(true);
    }
    confirm() {
        this.onConfirm.emit(true);
        if (this.confirmClose) {
            this.hide();
        }
        if (this.confirmLoading) {
            this.loadingBody = true;
        }
        if (this.confirmNotification) {
            this.notificationBody = true;
        }
    }
    get ligthTextContent() {
        return this.cBackgroundContainer && this.colorConfigService.isDark(this.cBackgroundContainer);
    }
    get modalClassFooter() {
        let classFooter = 'animated fadeIn ';
        if (this.classFooter) {
            classFooter += ` ${this.classFooter} `;
        }
        if (!this.borderFooter) {
            classFooter += ' pt-0 pb-3 ';
        }
        return classFooter;
    }
    get cBackgroundContainer() {
        if (this.backgroundContainer) {
            return this.backgroundContainer;
        }
        return this.mainService.getDarkTheme() ? 'dark' : '';
    }
    get modalSize() {
        return this.size ? this.size : 'sm';
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "ariaDescription", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ModalDialogComponent.prototype, "timeHide", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "closeFloating", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "confirmClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "confirmLoading", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "confirmNotification", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "loadingBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "notificationBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "backgroundContainer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "animationIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "classBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "paddingBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "footerPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "borderFooter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "classFooter", void 0);
__decorate([
    ViewChild('modal'),
    __metadata("design:type", ModalComponent)
], ModalDialogComponent.prototype, "modal", void 0);
__decorate([
    ViewChild('icon'),
    __metadata("design:type", ElementRef)
], ModalDialogComponent.prototype, "iconEl", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "onConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "onShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "onHide", void 0);
ModalDialogComponent = __decorate([
    Component({
        selector: 'fz-modal-dialog',
        templateUrl: './modal-dialog.component.html',
        styleUrls: ['./modal-dialog.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService, ColorConfigService])
], ModalDialogComponent);
export { ModalDialogComponent };
//# sourceMappingURL=modal-dialog.component.js.map