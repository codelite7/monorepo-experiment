import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTokensComponent } from './api-keys/api-tokens.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ClipboardModule } from 'ngx-clipboard';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'apitokens', component: ApiTokensComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [ApiTokensComponent, UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ClipboardModule, ReactiveFormsModule],
})
export class SecurityModule {}
