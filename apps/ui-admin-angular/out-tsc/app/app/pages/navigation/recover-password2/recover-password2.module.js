import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPassword2Component } from './recover-password2.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
const routes = [{ path: '', component: RecoverPassword2Component }];
let RecoverPassword2Module = class RecoverPassword2Module {
};
RecoverPassword2Module = __decorate([
    NgModule({
        declarations: [RecoverPassword2Component],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule],
    })
], RecoverPassword2Module);
export { RecoverPassword2Module };
//# sourceMappingURL=recover-password2.module.js.map