import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ErrorServerComponent } from './error-server.component';
const routes = [{ path: '', component: ErrorServerComponent }];
let ErrorServerModule = class ErrorServerModule {
};
ErrorServerModule = __decorate([
    NgModule({
        declarations: [ErrorServerComponent],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    })
], ErrorServerModule);
export { ErrorServerModule };
//# sourceMappingURL=error-server.module.js.map