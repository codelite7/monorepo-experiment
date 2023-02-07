import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
let ColorDirective = class ColorDirective {
    constructor(el, renderer, colorConfigService) {
        this.el = el;
        this.renderer = renderer;
        this.colorConfigService = colorConfigService;
        /**
         * Color contrast backgroundTextColor
         *
         * @type {(Colors | ColorTheme | GrayColors)}
         */
        this.colorContrast = 'white';
    }
    ngOnInit() {
        this.addClass();
    }
    ngOnChanges(changes) {
        this.addClass();
    }
    /**
     * Set class
     */
    addClass() {
        if (this.textColor) {
            this.renderer.setStyle(this.el.nativeElement, 'color', `var(--${this.textColor})`);
        }
        if (this.backgroundColor) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', `var(--${this.backgroundColor})`);
        }
        if (this.backgroundTextColor && !this.textColor && !this.backgroundColor) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', `var(--${this.backgroundTextColor})`);
            this.renderer.setStyle(this.el.nativeElement, 'color', `var(--${this.colorConfigService.isDark(this.backgroundTextColor) ? this.colorContrast : 'gray-800'})`);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorDirective.prototype, "textColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorDirective.prototype, "backgroundColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorDirective.prototype, "backgroundTextColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ColorDirective.prototype, "colorContrast", void 0);
ColorDirective = __decorate([
    Directive({
        selector: '[fzColor]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2, ColorConfigService])
], ColorDirective);
export { ColorDirective };
//# sourceMappingURL=color.directive.js.map