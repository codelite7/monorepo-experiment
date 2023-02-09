import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
let LoadingWaveComponent = class LoadingWaveComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.borderSize = 4;
        this.size = 40;
        this.color = 'primary';
    }
    ngOnInit() {
        this.init(this.borderSize, this.size, this.color);
    }
    ngOnChanges(changes) {
        const borderSize = changes.borderSize ? changes.borderSize.currentValue : this.borderSize;
        const size = changes.size ? changes.size.currentValue : this.size;
        const color = changes.color ? changes.color.currentValue : this.color;
        this.init(borderSize, size, color);
    }
    init(borderSize, size, color) {
        this.elementRef.nativeElement.style.setProperty('--border-size', `${borderSize}px`);
        this.elementRef.nativeElement.style.setProperty('--size', `${size}px`);
        this.elementRef.nativeElement.style.setProperty('--color', `var(--${color})`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingWaveComponent.prototype, "borderSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingWaveComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingWaveComponent.prototype, "color", void 0);
LoadingWaveComponent = __decorate([
    Component({
        selector: 'fz-loading-wave',
        templateUrl: './loading-wave.component.html',
        styleUrls: ['./loading-wave.component.scss'],
    }),
    __metadata("design:paramtypes", [ElementRef])
], LoadingWaveComponent);
export { LoadingWaveComponent };
//# sourceMappingURL=loading-wave.component.js.map