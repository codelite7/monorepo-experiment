import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupComponent } from './list-group.component';
import { ListGroupDirective } from './list-group.directive';
let ListGroupModule = class ListGroupModule {
};
ListGroupModule = __decorate([
    NgModule({
        declarations: [ListGroupComponent, ListGroupDirective],
        imports: [CommonModule],
        exports: [ListGroupComponent, ListGroupDirective],
    })
], ListGroupModule);
export { ListGroupModule };
//# sourceMappingURL=list-group.module.js.map