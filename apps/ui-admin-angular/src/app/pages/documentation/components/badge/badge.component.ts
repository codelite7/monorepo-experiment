import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  example = `<fz-badge color="primary">New</fz-badge>`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color background',
      default: 'primary',
      type: 'Colors | ColorTheme',
      required: true,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'pill',
      description: 'Rounded badge',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'size',
      description: 'Size badge',
      default: 'default',
      type: 'large | extra-large | default',
      required: false,
      actions: null,
    },
    {
      attribute: 'classBadge',
      description: 'Class badge',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
  ];

  contents = [
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content badge',
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-badge');
  }
}
