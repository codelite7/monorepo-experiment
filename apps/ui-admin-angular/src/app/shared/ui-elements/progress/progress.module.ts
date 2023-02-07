import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './progress.component';
import { ProgressDirective } from './progress.directive';

@NgModule({
  declarations: [ProgressComponent, ProgressDirective],
  imports: [CommonModule],
  exports: [ProgressComponent, ProgressDirective],
})
export class ProgressModule {}
