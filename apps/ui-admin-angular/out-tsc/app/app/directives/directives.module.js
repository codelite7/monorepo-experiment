import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { ImageUtilitiesDirective } from './image-utilities.directive';
import { TipDirective } from './tip.directive';
import { FocusDirective } from './focus.directive';
import { ColorDirective } from './color.directive';
let DirectivesModule = class DirectivesModule {
};
DirectivesModule = __decorate([
    NgModule({
        declarations: [ButtonDirective, ImageUtilitiesDirective, TipDirective, FocusDirective, ColorDirective],
        imports: [CommonModule],
        exports: [ButtonDirective, ImageUtilitiesDirective, TipDirective, FocusDirective, ColorDirective],
    })
], DirectivesModule);
export { DirectivesModule };
//# sourceMappingURL=directives.module.js.map