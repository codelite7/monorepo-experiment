import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
let MessageAlertComponent = class MessageAlertComponent {
    constructor(mainService, colorConfigService) {
        this.mainService = mainService;
        this.colorConfigService = colorConfigService;
        this.iconError = 'fas fa-times';
        this.iconSuccess = 'fas fa-check';
        this.iconWarning = 'fas fa-exclamation';
        this.classIcon = 'd-flex justify-content-center';
        this.classText = 'd-flex justify-content-center flex-column text-center';
        this.onClose = new EventEmitter();
        this.status = true;
        this.showTitle = true;
        this.showDescription = true;
        this.showButtons = true;
    }
    ngOnInit() {
        this.show();
    }
    ngAfterContentChecked() {
        var _a, _b, _c;
        if ((_a = this.titleEl) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.showTitle = this.titleEl.nativeElement.childNodes.length > 0 ? true : false;
        }
        if ((_b = this.descriptionEl) === null || _b === void 0 ? void 0 : _b.nativeElement) {
            this.showDescription = this.descriptionEl.nativeElement.childNodes.length > 0 ? true : false;
        }
        if ((_c = this.buttonsEl) === null || _c === void 0 ? void 0 : _c.nativeElement) {
            this.showButtons = this.buttonsEl.nativeElement.childNodes.length > 0 ? true : false;
        }
    }
    show() {
        this.status = true;
        let time;
        if (this.type === 'error' && this.timeHideError) {
            time = this.timeHideError;
        }
        if (this.type === 'success' && this.timeHideSuccess) {
            time = this.timeHideSuccess;
        }
        if (this.type === 'warning' && this.timeHideWarning) {
            time = this.timeHideWarning;
        }
        if (time) {
            setTimeout(() => this.hide(), time);
        }
    }
    hide() {
        this.status = false;
        this.onClose.emit(true);
    }
    get messageBackground() {
        return this.cBackground ? `bg-${this.cBackground}` : '';
    }
    get ligthTextContent() {
        return this.cBackground && this.colorConfigService.isDark(this.cBackground);
    }
    get cBackground() {
        if (this.background) {
            return this.background;
        }
        return this.mainService.getDarkTheme() ? 'dark' : '';
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], MessageAlertComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MessageAlertComponent.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MessageAlertComponent.prototype, "iconError", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MessageAlertComponent.prototype, "iconSuccess", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MessageAlertComponent.prototype, "iconWarning", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MessageAlertComponent.prototype, "classIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MessageAlertComponent.prototype, "classText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MessageAlertComponent.prototype, "timeHideSuccess", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MessageAlertComponent.prototype, "timeHideWarning", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MessageAlertComponent.prototype, "timeHideError", void 0);
__decorate([
    ViewChild('title'),
    __metadata("design:type", ElementRef)
], MessageAlertComponent.prototype, "titleEl", void 0);
__decorate([
    ViewChild('description'),
    __metadata("design:type", ElementRef)
], MessageAlertComponent.prototype, "descriptionEl", void 0);
__decorate([
    ViewChild('buttons'),
    __metadata("design:type", ElementRef)
], MessageAlertComponent.prototype, "buttonsEl", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MessageAlertComponent.prototype, "onClose", void 0);
MessageAlertComponent = __decorate([
    Component({
        selector: 'fz-message-alert',
        templateUrl: './message-alert.component.html',
        styleUrls: ['./message-alert.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService, ColorConfigService])
], MessageAlertComponent);
export { MessageAlertComponent };
//# sourceMappingURL=message-alert.component.js.map