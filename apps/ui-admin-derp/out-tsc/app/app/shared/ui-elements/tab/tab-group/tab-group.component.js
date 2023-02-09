import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
import { DomSanitizer } from '@angular/platform-browser';
let TabGroupComponent = class TabGroupComponent {
    constructor(mainService, colorConfigService, sanitizer) {
        this.mainService = mainService;
        this.colorConfigService = colorConfigService;
        this.sanitizer = sanitizer;
        this.currentTab = new EventEmitter();
        this.color = 'primary';
        this.position = 'start';
        this.type = 'tabs';
        this.justified = false;
        this.tabs = [];
    }
    ngOnInit() { }
    pushTab(tab) {
        this.tabs.push(tab);
    }
    /**
     * @author karanhudia
     * @param tab
     */
    selectTab(tab) {
        this.tabs.forEach((theTab) => {
            theTab.active = false;
        });
        tab.active = true;
        this.currentTab.emit(tab);
    }
    tabColorActive(tab) {
        if (tab.active && (this.type === 'pills' || this.type === 'tabs')) {
            const lightText = this.ligthTextTab ? 'text-white' : 'text-dark';
            return this.color ? `bg-${this.color} ${lightText}` : '';
        }
        if (tab.active && this.type !== 'pills' && this.type !== 'tabs') {
            return this.color ? `text-${this.color}` : '';
        }
        return '';
    }
    sanitizerHTML(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    get ligthTextTab() {
        return this.color && this.colorConfigService.isDark(this.color);
    }
    get tabPosition() {
        return this.position ? `justify-content-${this.position}` : '';
    }
    get darkMode() {
        return this.mainService.getDarkTheme() ? true : false;
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], TabGroupComponent.prototype, "currentTab", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabGroupComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabGroupComponent.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabGroupComponent.prototype, "classContent", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabGroupComponent.prototype, "classTab", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabGroupComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabGroupComponent.prototype, "justified", void 0);
TabGroupComponent = __decorate([
    Component({
        selector: 'fz-tab-group',
        templateUrl: './tab-group.component.html',
        styleUrls: ['./tab-group.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService,
        ColorConfigService,
        DomSanitizer])
], TabGroupComponent);
export { TabGroupComponent };
//# sourceMappingURL=tab-group.component.js.map