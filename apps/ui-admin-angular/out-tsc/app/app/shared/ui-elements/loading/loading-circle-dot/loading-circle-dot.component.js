import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
let LoadingCircleDotComponent = class LoadingCircleDotComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.size = 30;
        this.color1 = 'success';
        this.color2 = 'warning';
        this.color3 = 'danger';
        this.color4 = 'info';
    }
    ngOnInit() {
        this.init(this.size, this.color1, this.color2, this.color3, this.color4);
    }
    ngOnChanges(changes) {
        const size = changes.size ? changes.size.currentValue : this.size;
        const color1 = changes.color1 ? changes.color1.currentValue : this.color1;
        const color2 = changes.color2 ? changes.color2.currentValue : this.color2;
        const color3 = changes.color3 ? changes.color3.currentValue : this.color3;
        const color4 = changes.color4 ? changes.color4.currentValue : this.color4;
        this.init(size, color1, color2, color3, color4);
    }
    init(size, color1, color2, color3, color4) {
        this.elementRef.nativeElement.style.setProperty('--size', String(size / 2) + 'px');
        this.elementRef.nativeElement.style.setProperty('--color-1', `var(--${color1})`);
        this.elementRef.nativeElement.style.setProperty('--color-2', `var(--${color2})`);
        this.elementRef.nativeElement.style.setProperty('--color-3', `var(---${color3})`);
        this.elementRef.nativeElement.style.setProperty('--color-4', `var(--${color4})`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingCircleDotComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingCircleDotComponent.prototype, "color1", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingCircleDotComponent.prototype, "color2", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingCircleDotComponent.prototype, "color3", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingCircleDotComponent.prototype, "color4", void 0);
LoadingCircleDotComponent = __decorate([
    Component({
        selector: 'fz-loading-circle-dot',
        templateUrl: './loading-circle-dot.component.html',
        styleUrls: ['./loading-circle-dot.component.scss'],
    }),
    __metadata("design:paramtypes", [ElementRef])
], LoadingCircleDotComponent);
export { LoadingCircleDotComponent };
//# sourceMappingURL=loading-circle-dot.component.js.map