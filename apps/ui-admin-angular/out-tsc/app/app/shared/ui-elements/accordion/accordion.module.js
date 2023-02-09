import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
let AccordionModule = class AccordionModule {
};
AccordionModule = __decorate([
    NgModule({
        declarations: [AccordionComponent, AccordionItemComponent],
        imports: [CommonModule],
        exports: [AccordionComponent, AccordionItemComponent],
    })
], AccordionModule);
export { AccordionModule };
//# sourceMappingURL=accordion.module.js.map