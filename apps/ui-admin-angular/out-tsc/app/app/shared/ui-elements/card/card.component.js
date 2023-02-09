import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
let CardComponent = class CardComponent {
    constructor(mainService, colorConfigService) {
        this.mainService = mainService;
        this.colorConfigService = colorConfigService;
        this.shadow = true;
        this.padding = false;
        this.paddingHeader = true;
        this.paddingBody = true;
        this.paddingFooter = true;
        this.styleHeader = true;
        this.styleFooter = true;
        this.showHeader = false;
        this.showFooter = false;
    }
    ngOnInit() { }
    ngAfterContentChecked() {
        var _a, _b;
        if ((_a = this.headerEl) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.showHeader = this.headerEl.nativeElement.childNodes.length > 0 ? true : false;
        }
        if ((_b = this.footerEl) === null || _b === void 0 ? void 0 : _b.nativeElement) {
            this.showFooter = this.footerEl.nativeElement.childNodes.length > 0 ? true : false;
        }
    }
    get color() {
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
], CardComponent.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "shadow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "paddingHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "paddingBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "paddingFooter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "classArea", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "classHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "classBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CardComponent.prototype, "classFooter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "styleHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CardComponent.prototype, "styleFooter", void 0);
__decorate([
    ViewChild('header'),
    __metadata("design:type", ElementRef)
], CardComponent.prototype, "headerEl", void 0);
__decorate([
    ViewChild('footer'),
    __metadata("design:type", ElementRef)
], CardComponent.prototype, "footerEl", void 0);
CardComponent = __decorate([
    Component({
        selector: 'fz-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService, ColorConfigService])
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map