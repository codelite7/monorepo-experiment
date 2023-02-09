import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';
const routes = [
    { path: 'not-found', component: NotFoundComponent },
    { path: 'invalid-link', component: InvalidLinkComponent },
    { path: '**', redirectTo: 'not-found' },
];
let ErrorModule = class ErrorModule {
};
ErrorModule = __decorate([
    NgModule({
        declarations: [ErrorComponent, NotFoundComponent, InvalidLinkComponent],
        exports: [ErrorComponent],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    })
], ErrorModule);
export { ErrorModule };
//# sourceMappingURL=error.module.js.map