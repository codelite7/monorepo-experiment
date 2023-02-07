import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountActionsComponent } from './account-actions/account-actions.component';
import { ResetPasswordComponent } from './account-actions/reset-password/reset-password.component';
import { VerifyEmailComponent } from './account-actions/verify-email/verify-email.component';
import { NewSubscriptionComponent } from './subscription/new-subscription/new-subscription.component';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { newSubscriptionGuard } from '../../../route-guards';
import { NgxStripeModule } from 'ngx-stripe';
import { EmailsigninComponent } from './account-actions/emailsignin/emailsignin.component';

const redirectLoggedInToConsole = () => redirectLoggedInTo(['/console']);

const routes: Routes = [
  { path: 'actions', component: AccountActionsComponent },
  { path: 'actions/resetpassword', component: ResetPasswordComponent },
  { path: 'actions/verifyemail', component: VerifyEmailComponent },
  // email signin is guarded, will redirect to console if there's already a signed in user
  {
    path: 'actions/signin',
    component: EmailsigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToConsole },
  },
  {
    path: 'subscription/new',
    component: NewSubscriptionComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: newSubscriptionGuard },
  },
];

@NgModule({
  declarations: [
    AccountActionsComponent,
    NewSubscriptionComponent,
    ResetPasswordComponent,
    VerifyEmailComponent,
    EmailsigninComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule, NgxStripeModule],
})
export class AccountModule {}
