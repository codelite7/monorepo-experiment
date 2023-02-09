import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { GeneralAlertComponent } from './general-alert/general-alert.component';
import { FloatingNotificationsComponent } from './floating-notifications/floating-notifications.component';
import { MessagesAlertComponent } from './messages-alert/messages-alert.component';

const routes: Routes = [
  {
    path: 'general-alert',
    component: GeneralAlertComponent,
  },
  {
    path: 'floating-notifications',
    component: FloatingNotificationsComponent,
  },
  {
    path: 'messages-alert',
    component: MessagesAlertComponent,
  },
];

@NgModule({
  declarations: [GeneralAlertComponent, FloatingNotificationsComponent, MessagesAlertComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AlertsModule {}
