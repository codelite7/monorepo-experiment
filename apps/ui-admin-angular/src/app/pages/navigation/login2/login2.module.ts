import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Login2Component } from './login2.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailloginComponent } from './emaillogin/emaillogin.component';

const routes: Routes = [{ path: '', component: Login2Component }];

@NgModule({
  declarations: [Login2Component, EmailloginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule],
})
export class Login2Module {}
