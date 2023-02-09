import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorServer2Component } from './error-server2.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: ErrorServer2Component }];

@NgModule({
  declarations: [ErrorServer2Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ErrorServer2Module {}
