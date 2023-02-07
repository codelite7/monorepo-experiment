import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPassword2Component } from './recover-password2.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: RecoverPassword2Component }];

@NgModule({
  declarations: [RecoverPassword2Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule],
})
export class RecoverPassword2Module {}
