import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RecoverPasswordComponent } from './recover-password.component';

const routes: Routes = [{ path: '', component: RecoverPasswordComponent }];

@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class RecoverPasswordModule {}
