import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    NgModule({
        declarations: [FilterPipe, DomSanitizerPipe],
        imports: [CommonModule],
        exports: [FilterPipe, DomSanitizerPipe],
    })
], PipesModule);
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map