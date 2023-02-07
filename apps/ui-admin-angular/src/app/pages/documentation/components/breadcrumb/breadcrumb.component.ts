import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  example = `<fz-breadcrumb>
    <fz-breadcrumb-item class="d-flex justify-content-start">
        <a routerLink="/navigation/dashboard" href="javascript:void(0);"><i class="fas fa-home"></i> Home</a>
    </fz-breadcrumb-item>
    <fz-breadcrumb-item><a href="javascript:void(0);">Menu item 2</a></fz-breadcrumb-item>
    <fz-breadcrumb-item><a href="javascript:void(0);">Menu item 3</a></fz-breadcrumb-item>
    <fz-breadcrumb-item [active]="true">Menu active</fz-breadcrumb-item>
</fz-breadcrumb>`;

  inputs = [
    {
      attribute: 'ariaLabel',
      description: 'Aria label',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'background',
      description: 'State background',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'padding',
      description: 'Padding area',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'direction',
      description: 'Direction breadcrumb',
      default: 'start',
      type: 'start | end | center | between',
      required: true,
      actions: null,
    },
  ];

  contents = [
    { attribute: 'left', description: 'Left area' },
    { attribute: 'right', description: 'Right area' },
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content breadcrumb',
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-breadcrumb');
  }
}
