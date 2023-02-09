import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let IconColorCircleComponent = class IconColorCircleComponent {
    constructor() {
        this.size = 30;
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], IconColorCircleComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IconColorCircleComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IconColorCircleComponent.prototype, "size", void 0);
IconColorCircleComponent = __decorate([
    Component({
        selector: 'fz-icon-color-circle',
        templateUrl: './icon-color-circle.component.html',
        styleUrls: ['./icon-color-circle.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], IconColorCircleComponent);
export { IconColorCircleComponent };
//# sourceMappingURL=icon-color-circle.component.js.map