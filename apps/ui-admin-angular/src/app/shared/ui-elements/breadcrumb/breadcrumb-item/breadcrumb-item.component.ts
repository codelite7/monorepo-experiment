import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fz-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss'],
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
