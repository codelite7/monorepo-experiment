import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';

@NgModule({
  declarations: [FilterPipe, DomSanitizerPipe],
  imports: [CommonModule],
  exports: [FilterPipe, DomSanitizerPipe],
})
export class PipesModule {}
