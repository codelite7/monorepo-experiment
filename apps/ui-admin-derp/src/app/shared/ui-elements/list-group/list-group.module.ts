import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGroupComponent } from './list-group.component';
import { ListGroupDirective } from './list-group.directive';

@NgModule({
  declarations: [ListGroupComponent, ListGroupDirective],
  imports: [CommonModule],
  exports: [ListGroupComponent, ListGroupDirective],
})
export class ListGroupModule {}
