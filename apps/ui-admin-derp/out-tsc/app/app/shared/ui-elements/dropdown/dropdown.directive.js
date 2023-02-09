import { __decorate, __metadata } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
let DropdownDirective = class DropdownDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * Active
         */
        this.activeDI = false;
        /**
         * Disabled
         */
        this.disabledDI = false;
        /**
         * Divider
         */
        this.dividerDI = false;
        /**
         * Header
         */
        this.headerDI = false;
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        this.init();
    }
    /**
     * Set class
     */
    init() {
        // clear class
        this.clearClass();
        // add class
        this.renderer.addClass(this.el.nativeElement, `dropdown-item`);
        if (this.dividerDI || this.headerDI) {
            this.renderer.removeClass(this.el.nativeElement, `dropdown-item`);
        }
        if (this.activeDI) {
            this.renderer.addClass(this.el.nativeElement, `active`);
        }
        if (this.disabledDI) {
            this.renderer.addClass(this.el.nativeElement, `disabled`);
            this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '-1');
            this.renderer.setAttribute(this.el.nativeElement, 'aria-disabled', 'true');
        }
        if (this.dividerDI) {
            this.renderer.addClass(this.el.nativeElement, `dropdown-divider`);
        }
        if (this.headerDI) {
            this.renderer.addClass(this.el.nativeElement, `dropdown-header`);
        }
    }
    /**
     * Clear class
     */
    clearClass() {
        this.renderer.removeClass(this.el.nativeElement, `dropdown-item`);
        this.renderer.removeClass(this.el.nativeElement, `dropdown-divider`);
        this.renderer.removeClass(this.el.nativeElement, `dropdown-header`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "activeDI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "disabledDI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "dividerDI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "headerDI", void 0);
DropdownDirective = __decorate([
    Directive({
        selector: '[fzDropdownItem]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map