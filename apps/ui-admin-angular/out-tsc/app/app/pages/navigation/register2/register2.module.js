import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Register2Component } from './register2.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NgxStripeModule } from 'ngx-stripe';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { MainModule } from '@main/main.module';
const routes = [{ path: '', component: Register2Component }];
let Register2Module = class Register2Module {
};
Register2Module = __decorate([
    NgModule({
        declarations: [Register2Component],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            SharedModule,
            NgxStripeModule.forRoot(environment.stripePublicKey),
            ReactiveFormsModule,
            MainModule,
        ],
    })
], Register2Module);
export { Register2Module };
//# sourceMappingURL=register2.module.js.map