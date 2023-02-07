import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { COLORS } from '@services/model';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
import { MainService } from '../main.service';
let ModalSettingsComponent = class ModalSettingsComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.options = {};
        this.navBackground = ['nav1', 'nav2', 'nav3', 'nav4', 'nav5'];
        this.headerColors = COLORS;
    }
    ngOnInit() {
        this.mainService.modalSettingsEmit.subscribe(() => this.modal.show());
        this.initSettings();
        this.mainService.settingsEmit.subscribe(() => {
            this.options.darkTheme = this.mainService.getDarkTheme() ? true : false;
            this.options.fullbox = this.mainService.getFullBox() ? true : false;
            this.options.navTheme = this.mainService.getNavTheme() === 'light' ? 'light' : 'dark';
        });
    }
    initSettings() {
        this.options.darkTheme = this.mainService.getDarkTheme();
        this.options.fullbox = this.mainService.getFullBox() ? true : false;
        this.options.navPosition = this.mainService.getNavPosition();
        this.options.navStateInit = this.mainService.getNavStateInit() ? 'true' : 'false';
        this.options.navStateBackdrop = this.mainService.getNavStateBackdrop();
        this.options.navBackgroundImageState = this.mainService.getNavBackgroundImageState();
        this.options.navBackgroundImage = this.mainService.getNavBackgroundImage();
        this.options.navTheme = this.mainService.getNavTheme();
        this.options.headerTheme = this.mainService.getHeaderTheme();
        this.options.headerFixed = this.mainService.getHeaderFixed();
        this.options.headerOptSearch = this.mainService.getHeaderOptSearch();
        this.options.headerOptNotification = this.mainService.getHeaderOptNotification();
        this.options.headerOptChat = this.mainService.getHeaderOptChat();
        this.options.headerOptEmail = this.mainService.getHeaderOptEmail();
        this.options.headerOptTask = this.mainService.getHeaderOptTask();
    }
    show() {
        this.modal.show();
    }
    get extImageBackgroundNav() {
        return this.mainService.webpSupport ? 'webp' : 'jpg';
    }
};
__decorate([
    ViewChild('modal'),
    __metadata("design:type", ModalComponent)
], ModalSettingsComponent.prototype, "modal", void 0);
ModalSettingsComponent = __decorate([
    Component({
        selector: 'fz-modal-settings',
        templateUrl: './modal-settings.component.html',
        styleUrls: ['./modal-settings.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], ModalSettingsComponent);
export { ModalSettingsComponent };
//# sourceMappingURL=modal-settings.component.js.map