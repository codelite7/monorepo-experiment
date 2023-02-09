import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { GeneralTableComponent } from './general-table/general-table.component';
import { CompleteTableComponent } from './complete-table/complete-table.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {
    path: 'general-table',
    component: GeneralTableComponent,
  },
  {
    path: 'complete-table',
    component: CompleteTableComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
];

@NgModule({
  declarations: [GeneralTableComponent, CompleteTableComponent, PaginationComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class TableModule {}
