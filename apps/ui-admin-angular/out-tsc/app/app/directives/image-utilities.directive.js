import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
let ImageUtilitiesDirective = class ImageUtilitiesDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * Crop and center image
         */
        this.crop = false;
        /**
         * Img circle
         */
        this.circle = false;
        /**
         * Shadow
         */
        this.shadow = true;
        /**
         * Active border
         */
        this.active = false;
        /**
         * Border
         */
        this.border = false;
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
        this.default();
        // add class
        if (this.crop) {
            this.renderer.addClass(this.el.nativeElement, 'img-crop');
        }
        if (this.circle) {
            this.renderer.addClass(this.el.nativeElement, 'img-circle');
        }
        if (this.shadow) {
            this.renderer.addClass(this.el.nativeElement, 'img-shadow');
        }
        if (this.border && this.circle) {
            this.renderer.addClass(this.el.nativeElement, 'img-circle-border');
        }
        if (this.border && !this.circle) {
            this.renderer.addClass(this.el.nativeElement, 'img-border');
        }
        if (this.active && this.circle) {
            this.renderer.addClass(this.el.nativeElement, 'img-circle-active');
        }
        if (this.active && !this.circle) {
            this.renderer.addClass(this.el.nativeElement, 'img-active');
        }
        if (this.colorActive) {
            this.el.nativeElement.style.setProperty('--color-img-active', `var(--${this.colorActive})`);
        }
        if (this.widthHeight) {
            this.renderer.setStyle(this.el.nativeElement, 'width', this.widthHeight + 'px');
            this.renderer.setStyle(this.el.nativeElement, 'height', this.widthHeight + 'px');
        }
        if (this.widthIU) {
            this.renderer.setStyle(this.el.nativeElement, 'width', this.widthIU);
        }
        if (this.heightIU) {
            this.renderer.setStyle(this.el.nativeElement, 'height', this.heightIU);
        }
    }
    /**
     * Remove all class
     */
    default() {
        this.renderer.removeClass(this.el.nativeElement, 'img-crop');
        this.renderer.removeClass(this.el.nativeElement, 'img-circle');
        this.renderer.removeClass(this.el.nativeElement, 'img-shadow');
        this.renderer.removeClass(this.el.nativeElement, 'img-circle-border');
        this.renderer.removeClass(this.el.nativeElement, 'img-border');
        this.renderer.removeClass(this.el.nativeElement, 'img-circle-active');
        this.renderer.removeClass(this.el.nativeElement, 'img-active');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageUtilitiesDirective.prototype, "crop", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageUtilitiesDirective.prototype, "circle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ImageUtilitiesDirective.prototype, "widthHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ImageUtilitiesDirective.prototype, "widthIU", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ImageUtilitiesDirective.prototype, "heightIU", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageUtilitiesDirective.prototype, "shadow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageUtilitiesDirective.prototype, "active", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageUtilitiesDirective.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ImageUtilitiesDirective.prototype, "colorActive", void 0);
ImageUtilitiesDirective = __decorate([
    Directive({
        selector: '[fzImageUtilities]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], ImageUtilitiesDirective);
export { ImageUtilitiesDirective };
//# sourceMappingURL=image-utilities.directive.js.map