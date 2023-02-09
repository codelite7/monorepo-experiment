import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
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

@NgModule({
  declarations: [ConsoleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ConsoleModule {}
