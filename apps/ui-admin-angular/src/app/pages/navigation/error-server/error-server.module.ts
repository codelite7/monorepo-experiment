import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ErrorServerComponent } from './error-server.component';

const routes: Routes = [{ path: '', component: ErrorServerComponent }];

@NgModule({
  declarations: [ErrorServerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ErrorServerModule {}
