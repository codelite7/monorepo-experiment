import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotFound2Component } from './error-not-found2.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: ErrorNotFound2Component }];

@NgModule({
  declarations: [ErrorNotFound2Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ErrorNotFound2Module {}
