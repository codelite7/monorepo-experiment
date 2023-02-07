import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: 'invalid-link', component: InvalidLinkComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  declarations: [ErrorComponent, NotFoundComponent, InvalidLinkComponent],
  exports: [ErrorComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ErrorModule {}
