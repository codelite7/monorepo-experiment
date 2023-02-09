import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { ExpansedHeight2 } from 'src/app/animation';
import { MainService } from '@main/main.service';
let AccordionItemComponent = class AccordionItemComponent {
    constructor(mainService, colorConfigService) {
        this.mainService = mainService;
        this.colorConfigService = colorConfigService;
        this.iconOpen = 'fas fa-angle-down';
        this.iconClose = 'fas fa-angle-up';
        this.iconStatus = true;
        this.class = 'd-flex justify-content-between';
        this.padding = true;
        this.disabled = false;
        this.marginTopOpen = true;
        this.marginBottomOpen = true;
        this.shadowBox = true;
        this.paddingContent = true;
        this.status = false;
        this.state = 'hide';
    }
    ngOnInit() {
        if (this.status) {
            this.state = !this.status ? 'hide' : 'show';
        }
    }
    colapse() {
        if (!this.disabled) {
            this.state = this.status ? 'hide' : 'show';
            this.status = !this.status;
        }
    }
    get ligthTextContent() {
        return ((this.cColor && this.colorConfigService.isDark(this.cColor)) ||
            (this.cColor === '' && this.mainService.getDarkTheme()));
    }
    get accordionColor() {
        return this.cColor ? `bg-${this.cColor}` : '';
    }
    get cColor() {
        if (this.color) {
            return this.color === 'transparent' ? '' : this.color;
        }
        return this.mainService.getDarkTheme() ? 'dark' : 'white';
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "iconOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "iconClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "iconStatus", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "class", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AccordionItemComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "marginTopOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "marginBottomOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "shadowBox", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AccordionItemComponent.prototype, "classBox", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AccordionItemComponent.prototype, "classContent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "paddingContent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordionItemComponent.prototype, "status", void 0);
AccordionItemComponent = __decorate([
    Component({
        selector: 'fz-accordion-item',
        templateUrl: './accordion-item.component.html',
        styleUrls: ['./accordion-item.component.scss'],
        animations: [ExpansedHeight2('400ms')],
    }),
    __metadata("design:paramtypes", [MainService, ColorConfigService])
], AccordionItemComponent);
export { AccordionItemComponent };
//# sourceMappingURL=accordion-item.component.js.map