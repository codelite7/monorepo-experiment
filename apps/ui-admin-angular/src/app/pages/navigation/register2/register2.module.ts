import { NgModule, ReflectiveInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Register2Component } from './register2.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NgxStripeModule } from 'ngx-stripe';
import { ReactiveFormsModule } from '@angular/forms';
import { MainModule } from '@main/main.module';
import { ConfigService } from '@services/config/config.service';

const routes: Routes = [{ path: '', component: Register2Component }];

@NgModule({
  declarations: [Register2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxStripeModule.forRoot(), // empty because we're lazy loading config, see https://docs.ngx-stripe.dev/core-concepts/service-factory
    ReactiveFormsModule,
    MainModule,
  ],
})
export class Register2Module {}
