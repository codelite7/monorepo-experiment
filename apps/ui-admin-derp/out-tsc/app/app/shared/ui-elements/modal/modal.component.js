import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { FadeAnimation } from 'src/app/animation';
import { MainService } from '@main/main.service';
let ModalComponent = class ModalComponent {
    constructor(mainService, colorConfigService, renderer) {
        this.mainService = mainService;
        this.colorConfigService = colorConfigService;
        this.renderer = renderer;
        this.headerClose = false;
        this.closeFloating = false;
        this.backgroundOverlay = 'dark';
        this.animated = 'bounceInDown';
        this.backdropBlur = false;
        this.paddingHeader = true;
        this.paddingBody = true;
        this.paddingFooter = true;
        this.borderHeader = true;
        this.borderFooter = true;
        this.footerPosition = 'center';
        this.shadow = true;
        this.clickedOutside = true;
        this.scrollable = false;
        this.centered = false;
        this.loadingBody = false;
        this.loadingHideHeaders = false;
        this.classLoadingBody = 'modal-loading-body';
        this.notificationBody = false;
        this.notificationBodyHideHeaders = false;
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.status = false;
        this.showHeader = true;
        this.showBody = true;
        this.showFooter = true;
    }
    ngOnInit() { }
    ngDoCheck() {
        var _a, _b, _c, _d;
        if (this.areaEl && this.areaEl.nativeElement && this.status) {
            this.renderer.setAttribute(this.areaEl.nativeElement, 'aria-modal', 'true');
        }
        if (this.status) {
            this.showHeader = ((_b = (_a = this.headerEl) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.childNodes.length) > 0 ? true : false;
            this.showFooter = ((_d = (_c = this.footerEl) === null || _c === void 0 ? void 0 : _c.nativeElement) === null || _d === void 0 ? void 0 : _d.childNodes.length) > 0 ? true : false;
        }
    }
    show() {
        this.status = true;
        this.renderer.addClass(document.body, 'modal-open');
        if (this.timeHide) {
            setTimeout(() => this.hide(), this.timeHide);
        }
        this.onShow.emit(true);
    }
    hide() {
        this.status = false;
        this.renderer.removeClass(document.body, 'modal-open');
        this.onHide.emit(true);
    }
    onClickedOutside() {
        if (this.clickedOutside) {
            this.hide();
        }
    }
    get ligthTextContent() {
        return this.cBackgroundContainer && this.colorConfigService.isDark(this.cBackgroundContainer);
    }
    get modalBackgroundContainer() {
        return this.cBackgroundContainer ? `bg-${this.cBackgroundContainer}` : '';
    }
    get modalBackgroundOverlay() {
        return this.backgroundOverlay ? `bg-${this.backgroundOverlay}` : '';
    }
    get modalSize() {
        return this.size ? `modal-${this.size}` : '';
    }
    get modalFooterPosition() {
        return this.footerPosition ? `modal-footer-pos-${this.footerPosition}` : '';
    }
    get validHideHeaders() {
        const validLoading = this.loadingBody && this.loadingHideHeaders ? false : true;
        const validNotification = this.notificationBody && this.notificationBodyHideHeaders ? false : true;
        return validLoading && validNotification;
    }
    get validShowHeader() {
        return (this.showHeader || this.headerTitle || this.headerClose) && this.validHideHeaders;
    }
    get validShowFooter() {
        return this.showFooter && this.validHideHeaders;
    }
    get cBackgroundContainer() {
        if (this.backgroundContainer) {
            return this.backgroundContainer;
        }
        return this.mainService.getDarkTheme() ? 'dark' : '';
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "ariaDescription", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "headerTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "headerClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "closeFloating", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "backgroundOverlay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "animated", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "backgroundContainer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "backdropBlur", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "paddingHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "paddingBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "paddingFooter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "borderHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "borderFooter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "classHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "classBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "classFooter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "footerPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "shadow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "clickedOutside", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "scrollable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "centered", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "fullMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ModalComponent.prototype, "zIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ModalComponent.prototype, "timeHide", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "loadingBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "loadingHideHeaders", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "classLoadingBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "notificationBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "notificationBodyHideHeaders", void 0);
__decorate([
    ViewChild('header'),
    __metadata("design:type", ElementRef)
], ModalComponent.prototype, "headerEl", void 0);
__decorate([
    ViewChild('footer'),
    __metadata("design:type", ElementRef)
], ModalComponent.prototype, "footerEl", void 0);
__decorate([
    ViewChild('area'),
    __metadata("design:type", ElementRef)
], ModalComponent.prototype, "areaEl", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "onShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "onHide", void 0);
ModalComponent = __decorate([
    Component({
        selector: 'fz-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.scss'],
        animations: [FadeAnimation()],
    }),
    __metadata("design:paramtypes", [MainService,
        ColorConfigService,
        Renderer2])
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map