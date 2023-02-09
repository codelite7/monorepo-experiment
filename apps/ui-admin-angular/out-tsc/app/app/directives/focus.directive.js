import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
let FocusDirective = class FocusDirective {
    constructor(el, ref) {
        this.el = el;
        this.ref = ref;
        /**
         * Focus state
         */
        this.focusState = false;
        /**
         * Focus output
         */
        this.onFocus = new EventEmitter();
    }
    ngOnInit() {
        this.focus();
    }
    ngOnChanges(changes) {
        this.focus();
    }
    /**
     * Focus element
     */
    focus() {
        if (this.focusState) {
            let elfocus;
            clearTimeout(elfocus);
            elfocus = setTimeout(() => {
                this.el.nativeElement.focus();
                this.onFocus.emit(false);
            }, 0);
        }
        // this.ref.detectChanges();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FocusDirective.prototype, "focusState", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FocusDirective.prototype, "onFocus", void 0);
FocusDirective = __decorate([
    Directive({
        selector: '[fzFocus]',
    }),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], FocusDirective);
export { FocusDirective };
//# sourceMappingURL=focus.directive.js.map