import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTokensComponent } from './api-keys/api-tokens.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ClipboardModule } from 'ngx-clipboard';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes = [
    { path: 'apitokens', component: ApiTokensComponent },
    { path: 'users', component: UsersComponent },
];
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    NgModule({
        declarations: [ApiTokensComponent, UsersComponent],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ClipboardModule, ReactiveFormsModule],
    })
], SecurityModule);
export { SecurityModule };
//# sourceMappingURL=security.module.js.map