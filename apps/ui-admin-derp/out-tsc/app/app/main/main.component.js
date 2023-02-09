import { __decorate, __metadata } from "tslib";
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { MainService } from './main.service';
import { Router, NavigationStart } from '@angular/router';
import { LoadingGeneralService } from './loading-general/loading-general.service';
let MainComponent = class MainComponent {
    constructor(mainService, loadingService, router) {
        this.mainService = mainService;
        this.loadingService = loadingService;
        this.router = router;
    }
    onResize(event) {
        this.responsive(event.target.innerWidth, event.target.innerHeight);
    }
    ngOnInit() {
        this.responsive(window.innerWidth, window.innerHeight);
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationStart) {
                this.loadingService.setOptions({ statusOverlay: false }).show(300);
            }
        });
    }
    /**
     * Responsive control
     *
     * @param {*} width
     * @param {*} height
     */
    responsive(width, height) {
        this.mainService.responsive = width < 800 ? true : false;
        this.mainService.responsiveTiny = width < 370 ? true : false;
        this.mainService.widthWindow = width;
        this.mainService.heightwindow = height;
        this.mainService.resizeWindowEmit.emit({ width, height });
        this.mainService.navState =
            !this.mainService.responsive && !this.mainService.getNavStateBackdrop() && this.mainService.getNavStateInit()
                ? true
                : false;
    }
    /**
     * Mount style url image nav image
     *
     * @readonly
     */
    get navBackgroundSrc() {
        const ext = this.mainService.webpSupport ? 'webp' : 'jpg';
        return this.mainService.getNavBackgroundImage()
            ? `url('assets/images/${this.mainService.getNavBackgroundImage()}.${ext}')`
            : '';
    }
    /**
     * Mount class control theme header
     *
     * @readonly
     */
    get headerColor() {
        return this.mainService.getHeaderTheme() ? `main-header-theme-${this.mainService.getHeaderTheme()}` : '';
    }
};
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainComponent.prototype, "onResize", null);
MainComponent = __decorate([
    Component({
        selector: 'fz-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService, LoadingGeneralService, Router])
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map