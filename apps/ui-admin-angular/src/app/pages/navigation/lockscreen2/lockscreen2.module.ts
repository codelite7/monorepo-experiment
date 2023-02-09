import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lockscreen2Component } from './lockscreen2.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: Lockscreen2Component }];

@NgModule({
  declarations: [Lockscreen2Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class Lockscreen2Module {}
