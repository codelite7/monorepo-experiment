import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
let LoadingCircle2Component = class LoadingCircle2Component {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.size = 40;
        this.color = 'primary';
    }
    ngOnInit() {
        this.init(this.color);
    }
    ngOnChanges(changes) {
        const color = changes.color ? changes.color.currentValue : this.color;
        this.init(color);
    }
    init(color) {
        this.elementRef.nativeElement.style.setProperty('--color-loading-circle', `var(--${color})`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingCircle2Component.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingCircle2Component.prototype, "color", void 0);
LoadingCircle2Component = __decorate([
    Component({
        selector: 'fz-loading-circle2',
        templateUrl: './loading-circle2.component.html',
        styleUrls: ['./loading-circle2.component.scss'],
    }),
    __metadata("design:paramtypes", [ElementRef])
], LoadingCircle2Component);
export { LoadingCircle2Component };
//# sourceMappingURL=loading-circle2.component.js.map