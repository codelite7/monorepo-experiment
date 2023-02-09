import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Login2Component } from './login2.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailloginComponent } from './emaillogin/emaillogin.component';
const routes = [{ path: '', component: Login2Component }];
let Login2Module = class Login2Module {
};
Login2Module = __decorate([
    NgModule({
        declarations: [Login2Component, EmailloginComponent],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule],
    })
], Login2Module);
export { Login2Module };
//# sourceMappingURL=login2.module.js.map