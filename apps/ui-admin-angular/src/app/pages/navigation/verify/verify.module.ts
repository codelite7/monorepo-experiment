import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { EmailComponent } from './email/email.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { newSubscriptionGuard, verifyEmailGuard } from '../../../route-guards';
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';

const routes: Routes = [
  {
    path: 'email',
    component: EmailComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: verifyEmailGuard },
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: newSubscriptionGuard },
  },
];

@NgModule({
  declarations: [EmailComponent, PaymentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule, NgxStripeModule],
})
export class VerifyModule {}
