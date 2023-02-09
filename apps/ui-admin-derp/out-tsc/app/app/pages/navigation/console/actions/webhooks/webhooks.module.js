import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebhooksComponent } from './webhooks.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CreateWebhookActionComponent } from './create-webhook-action/create-webhook-action.component';
import { WebhookActionFormComponent } from './webhook-action-form/webhook-action-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditWebhookActionComponent } from './edit-webhook-action/edit-webhook-action.component';
const routes = [
    { path: '', component: WebhooksComponent },
    { path: 'create', component: CreateWebhookActionComponent },
    { path: ':id', component: EditWebhookActionComponent },
];
let WebhooksModule = class WebhooksModule {
};
WebhooksModule = __decorate([
    NgModule({
        declarations: [
            WebhooksComponent,
            CreateWebhookActionComponent,
            WebhookActionFormComponent,
            EditWebhookActionComponent,
        ],
        imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule, FormsModule],
    })
], WebhooksModule);
export { WebhooksModule };
//# sourceMappingURL=webhooks.module.js.map