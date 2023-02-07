import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
let TabModule = class TabModule {
};
TabModule = __decorate([
    NgModule({
        declarations: [TabComponent, TabGroupComponent],
        imports: [CommonModule],
        exports: [TabComponent, TabGroupComponent],
    })
], TabModule);
export { TabModule };
//# sourceMappingURL=tab.module.js.map