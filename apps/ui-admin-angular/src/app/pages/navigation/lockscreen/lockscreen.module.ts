import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LockscreenComponent } from './lockscreen.component';

const routes: Routes = [{ path: '', component: LockscreenComponent }];

@NgModule({
  declarations: [LockscreenComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class LockscreenModule {}
