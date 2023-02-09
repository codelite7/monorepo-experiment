import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { MainService } from '@main/main.service';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.background = true;
        this.padding = true;
        this.direction = 'start';
    }
    ngOnInit() { }
    get directionC() {
        return this.mainService.responsive ? '' : `justify-content-${this.direction}`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], BreadcrumbComponent.prototype, "ariaLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BreadcrumbComponent.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BreadcrumbComponent.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BreadcrumbComponent.prototype, "direction", void 0);
BreadcrumbComponent = __decorate([
    Component({
        selector: 'fz-breadcrumb',
        templateUrl: './breadcrumb.component.html',
        styleUrls: ['./breadcrumb.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map