import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = __decorate([
    NgModule({
        declarations: [BreadcrumbComponent, BreadcrumbItemComponent],
        imports: [CommonModule],
        exports: [BreadcrumbComponent, BreadcrumbItemComponent],
    })
], BreadcrumbModule);
export { BreadcrumbModule };
//# sourceMappingURL=breadcrumb.module.js.map