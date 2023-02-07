import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [{ path: '', component: NotificationsComponent }];

@NgModule({
  declarations: [NotificationsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class NotificationsModule {}
