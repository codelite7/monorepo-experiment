import { __decorate, __metadata } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
let ProgressDirective = class ProgressDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stripedPI = false;
        this.animatedPI = false;
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        this.init(changes);
    }
    /**
     * Set class
     */
    init(changes) {
        var _a;
        let color;
        if ((_a = changes === null || changes === void 0 ? void 0 : changes.colorPI) === null || _a === void 0 ? void 0 : _a.previousValue) {
            this.renderer.removeClass(this.el.nativeElement, `bg-${changes.colorPI.previousValue}`);
        }
        if (this.colorPI) {
            color = `bg-${this.colorPI}`;
        }
        // clear class
        this.default(color);
        // add class
        this.renderer.addClass(this.el.nativeElement, 'progress-bar');
        if (this.sizePI) {
            this.renderer.setStyle(this.el.nativeElement, 'width', `${this.sizePI}%`);
        }
        if (this.colorPI) {
            this.renderer.addClass(this.el.nativeElement, color);
        }
        if (this.stripedPI) {
            this.renderer.addClass(this.el.nativeElement, 'progress-bar-striped');
        }
        if (this.animatedPI) {
            this.renderer.addClass(this.el.nativeElement, 'progress-bar-animated');
        }
    }
    /**
     * Clear class
     *
     * @param {string} color
     */
    default(color) {
        this.renderer.removeClass(this.el.nativeElement, color);
        this.renderer.removeClass(this.el.nativeElement, 'progress-bar');
        this.renderer.removeClass(this.el.nativeElement, 'progress-bar-striped');
        this.renderer.removeClass(this.el.nativeElement, 'progress-bar-animated');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressDirective.prototype, "sizePI", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ProgressDirective.prototype, "colorPI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ProgressDirective.prototype, "stripedPI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ProgressDirective.prototype, "animatedPI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ProgressDirective.prototype, "classPI", void 0);
ProgressDirective = __decorate([
    Directive({
        selector: '[fzProgressItem]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], ProgressDirective);
export { ProgressDirective };
//# sourceMappingURL=progress.directive.js.map