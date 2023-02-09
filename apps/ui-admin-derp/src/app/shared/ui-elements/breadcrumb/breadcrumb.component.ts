import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit {
  @Input() ariaLabel: string;

  @Input() background = true;

  @Input() padding = true;

  @Input() direction: 'start' | 'end' | 'center' | 'between' = 'start';

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}

  get directionC() {
    return this.mainService.responsive ? '' : `justify-content-${this.direction}`;
  }
}
