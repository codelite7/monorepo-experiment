import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ProgressDirective } from './progress.directive';
let ProgressModule = class ProgressModule {
};
ProgressModule = __decorate([
    NgModule({
        declarations: [ProgressComponent, ProgressDirective],
        imports: [CommonModule],
        exports: [ProgressComponent, ProgressDirective],
    })
], ProgressModule);
export { ProgressModule };
//# sourceMappingURL=progress.module.js.map