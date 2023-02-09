import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { InvoicesComponent } from './invoices/invoices.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
const routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
];
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    NgModule({
        declarations: [BillingComponent, InvoicesComponent, ChangepasswordComponent, ProfileComponent],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule, NgxStripeModule],
    })
], AccountModule);
export { AccountModule };
//# sourceMappingURL=account.module.js.map