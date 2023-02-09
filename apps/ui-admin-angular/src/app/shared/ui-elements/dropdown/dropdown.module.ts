import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { DropdownDirective, DropdownControlDirective } from './dropdown.directive';

import { ButtonDirective } from '../../directives/button.directive';
import { TipDirective } from '../../directives/tip.directive';

@NgModule({
  declarations: [DropdownComponent, DropdownDirective, DropdownControlDirective],
  imports: [CommonModule],
  exports: [DropdownComponent, DropdownDirective, DropdownControlDirective],
})
export class DropdownModule {}
