import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let BadgeComponent = class BadgeComponent {
    constructor() {
        this.size = 'default';
        this.pill = false;
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], BadgeComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BadgeComponent.prototype, "pill", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BadgeComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BadgeComponent.prototype, "classBadge", void 0);
BadgeComponent = __decorate([
    Component({
        selector: 'fz-badge',
        templateUrl: './badge.component.html',
        styleUrls: ['./badge.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], BadgeComponent);
export { BadgeComponent };
//# sourceMappingURL=badge.component.js.map