import { __decorate, __metadata } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
let ListGroupDirective = class ListGroupDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * Active
         */
        this.activeLGI = false;
        /**
         * Action
         */
        this.actionLGI = false;
        /**
         * Disabled
         */
        this.disabledLGI = false;
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
        if ((_a = changes === null || changes === void 0 ? void 0 : changes.colorLGI) === null || _a === void 0 ? void 0 : _a.previousValue) {
            this.renderer.removeClass(this.el.nativeElement, `list-group-item-${changes.colorLGI.previousValue}`);
        }
        if (this.colorLGI) {
            color = `list-group-item-${this.colorLGI}`;
        }
        // clear class
        this.default(color);
        // add class
        this.renderer.addClass(this.el.nativeElement, 'list-group-item');
        if (this.activeLGI) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        if (this.actionLGI) {
            this.renderer.addClass(this.el.nativeElement, 'list-group-item-action');
        }
        if (this.disabledLGI) {
            this.renderer.addClass(this.el.nativeElement, 'disabled');
            this.renderer.setAttribute(this.el.nativeElement, 'aria-disabled', 'true');
        }
        if (this.colorLGI) {
            this.renderer.addClass(this.el.nativeElement, color);
        }
    }
    /**
     * Clear class
     *
     * @param {string} color
     */
    default(color) {
        this.renderer.removeClass(this.el.nativeElement, color);
        this.renderer.removeClass(this.el.nativeElement, 'list-group-item');
        this.renderer.removeClass(this.el.nativeElement, 'active');
        this.renderer.removeClass(this.el.nativeElement, 'list-group-item-action');
        this.renderer.removeClass(this.el.nativeElement, 'disabled');
        this.renderer.removeAttribute(this.el.nativeElement, 'aria-disabled');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ListGroupDirective.prototype, "activeLGI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ListGroupDirective.prototype, "actionLGI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ListGroupDirective.prototype, "disabledLGI", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ListGroupDirective.prototype, "colorLGI", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ListGroupDirective.prototype, "classLGI", void 0);
ListGroupDirective = __decorate([
    Directive({
        selector: '[fzListGroupItem]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], ListGroupDirective);
export { ListGroupDirective };
//# sourceMappingURL=list-group.directive.js.map