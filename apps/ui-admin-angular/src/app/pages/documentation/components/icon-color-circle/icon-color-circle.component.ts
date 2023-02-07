import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-icon-color-circle',
  templateUrl: './icon-color-circle.component.html',
  styleUrls: ['./icon-color-circle.component.scss'],
})
export class IconColorCircleComponent implements OnInit {
  example = `<fz-icon-color-circle size="35" color="primary" icon="fas fa-address-book"></fz-icon-color-circle>`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color icon',
      default: 'primary',
      type: 'Colors | ColorTheme',
      required: true,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'icon',
      description: 'font awesome icon',
      default: '',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'size',
      description: 'Size icon',
      default: '30',
      type: 'number',
      required: false,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-icon-color-circle');
  }
}
