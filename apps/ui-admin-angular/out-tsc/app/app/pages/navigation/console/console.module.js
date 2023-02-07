import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
const routes = [
    { path: '', component: ConsoleComponent },
    {
        path: 'pipelines',
        loadChildren: () => import('./pipelines/pipelines.module').then((m) => m.PipelinesModule),
    },
    {
        path: 'actions/webhooks',
        loadChildren: () => import('./actions/webhooks/webhooks.module').then((m) => m.WebhooksModule),
    },
    {
        path: 'security',
        loadChildren: () => import('./security/security.module').then((m) => m.SecurityModule),
    },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
    },
];
let ConsoleModule = class ConsoleModule {
};
ConsoleModule = __decorate([
    NgModule({
        declarations: [ConsoleComponent],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    })
], ConsoleModule);
export { ConsoleModule };
//# sourceMappingURL=console.module.js.map