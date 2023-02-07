import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let IconCounterComponent = class IconCounterComponent {
    constructor() {
        this.color = 'primary';
        this.animatedIcon = 'swing';
        this.animatedIconInfinite = false;
        this.animatedBalloon = 'slideInUp';
        this.animatedBalloonInfinite = false;
        this.dot = false;
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], IconCounterComponent.prototype, "counter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IconCounterComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IconCounterComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IconCounterComponent.prototype, "animatedIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IconCounterComponent.prototype, "animatedIconInfinite", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IconCounterComponent.prototype, "animatedBalloon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IconCounterComponent.prototype, "animatedBalloonInfinite", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IconCounterComponent.prototype, "dot", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], IconCounterComponent.prototype, "size", void 0);
IconCounterComponent = __decorate([
    Component({
        selector: 'fz-icon-counter',
        templateUrl: './icon-counter.component.html',
        styleUrls: ['./icon-counter.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], IconCounterComponent);
export { IconCounterComponent };
//# sourceMappingURL=icon-counter.component.js.map