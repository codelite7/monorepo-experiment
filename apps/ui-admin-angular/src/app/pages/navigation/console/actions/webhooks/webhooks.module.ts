import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebhooksComponent } from './webhooks.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CreateWebhookActionComponent } from './create-webhook-action/create-webhook-action.component';
import { WebhookActionFormComponent } from './webhook-action-form/webhook-action-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditWebhookActionComponent } from './edit-webhook-action/edit-webhook-action.component';

const routes: Routes = [
  { path: '', component: WebhooksComponent },
  { path: 'create', component: CreateWebhookActionComponent },
  { path: ':id', component: EditWebhookActionComponent },
];

@NgModule({
  declarations: [
    WebhooksComponent,
    CreateWebhookActionComponent,
    WebhookActionFormComponent,
    EditWebhookActionComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule, FormsModule],
})
export class WebhooksModule {}