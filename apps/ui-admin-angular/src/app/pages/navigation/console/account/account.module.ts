import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { InvoicesComponent } from './invoices/invoices.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import { NewComponent } from './new/new.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'new', component: NewComponent },
];

@NgModule({
  declarations: [BillingComponent, InvoicesComponent, ChangepasswordComponent, ProfileComponent, NewComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule, NgxStripeModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatIconModule],
})
export class AccountModule {}
