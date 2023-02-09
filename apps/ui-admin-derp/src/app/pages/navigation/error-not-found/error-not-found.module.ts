import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ErrorNotFoundComponent } from './error-not-found.component';

const routes: Routes = [{ path: '', component: ErrorNotFoundComponent }];

@NgModule({
  declarations: [ErrorNotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ErrorNotFoundModule {}
