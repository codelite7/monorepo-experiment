import { __decorate, __metadata } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
let ButtonDirective = class ButtonDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * Button outline
         */
        this.outline = false;
        /**
         * Button link
         */
        this.link = false;
        /**
         * Button active
         */
        this.activeB = false;
        /**
         * Center block
         */
        this.blockB = false;
        /**
         * Disabled button
         */
        this.disabledB = false;
        /**
         * Button rounded
         */
        this.rounded = false;
        /**
         * Button circle
         */
        this.circle = false;
        /**
         * Button large right and left
         */
        this.lrLargeB = false;
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        this.init(changes);
    }
    /**
     * Add class
     */
    init(changes) {
        var _a, _b;
        let btnColor;
        let btnSize;
        if ((_a = changes === null || changes === void 0 ? void 0 : changes.color) === null || _a === void 0 ? void 0 : _a.previousValue) {
            const outlineS1 = this.outline ? 'outline-' : '';
            const btnColor1 = `btn-${outlineS1}${changes.color.previousValue}`;
            this.renderer.removeClass(this.el.nativeElement, btnColor1);
        }
        if ((_b = changes === null || changes === void 0 ? void 0 : changes.size) === null || _b === void 0 ? void 0 : _b.previousValue) {
            this.renderer.removeClass(this.el.nativeElement, `btn-${changes.size.previousValue}`);
        }
        // ---
        if (this.color) {
            const outlineS = this.outline ? 'outline-' : '';
            btnColor = `btn-${outlineS}${this.color}`;
        }
        if (this.size) {
            btnSize = `btn-${this.size}`;
        }
        // clear
        this.clearClass(btnColor, btnSize);
        // add
        this.renderer.addClass(this.el.nativeElement, 'btn');
        if (this.color) {
            this.renderer.addClass(this.el.nativeElement, btnColor);
        }
        if (this.size) {
            this.renderer.addClass(this.el.nativeElement, btnSize);
        }
        if (this.link) {
            this.renderer.addClass(this.el.nativeElement, 'btn-link');
        }
        if (this.activeB) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        if (this.blockB) {
            this.renderer.addClass(this.el.nativeElement, 'btn-block');
        }
        if (this.disabledB) {
            this.renderer.addClass(this.el.nativeElement, 'disabled');
        }
        if (this.rounded) {
            this.renderer.addClass(this.el.nativeElement, 'btn-rounded');
        }
        if (this.circle) {
            this.renderer.addClass(this.el.nativeElement, 'btn-circle');
        }
        if (this.lrLargeB) {
            this.renderer.addClass(this.el.nativeElement, 'btn-lr-large');
        }
    }
    /**
     * Remove all class
     *
     * @param {string} btnColor
     * @param {string} btnSize
     */
    clearClass(btnColor, btnSize) {
        this.renderer.removeClass(this.el.nativeElement, btnColor);
        this.renderer.removeClass(this.el.nativeElement, btnSize);
        this.renderer.removeClass(this.el.nativeElement, 'btn-link');
        this.renderer.removeClass(this.el.nativeElement, 'active');
        this.renderer.removeClass(this.el.nativeElement, 'btn-block');
        this.renderer.removeClass(this.el.nativeElement, 'disabled');
        this.renderer.removeClass(this.el.nativeElement, 'btn-rounded');
        this.renderer.removeClass(this.el.nativeElement, 'btn-circle');
        this.renderer.removeClass(this.el.nativeElement, 'btn-lr-large');
        this.renderer.removeClass(this.el.nativeElement, 'btn');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "outline", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonDirective.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "link", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "activeB", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "blockB", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "disabledB", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "rounded", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "circle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonDirective.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "lrLargeB", void 0);
ButtonDirective = __decorate([
    Directive({
        selector: '[fzButton]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], ButtonDirective);
export { ButtonDirective };
//# sourceMappingURL=button.directive.js.map