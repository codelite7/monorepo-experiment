import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { GeneralModalComponent } from './general-modal/general-modal.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

const routes: Routes = [
  {
    path: 'general-modal',
    component: GeneralModalComponent,
  },
  {
    path: 'modal-dialog',
    component: ModalDialogComponent,
  },
];

@NgModule({
  declarations: [GeneralModalComponent, ModalDialogComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ModalModule {}
