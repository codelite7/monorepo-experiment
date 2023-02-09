import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  example = `<h4><fz-rating [(rate)]="rate"></fz-rating></h4>`;

  inputs = [
    {
      attribute: 'max',
      description: 'Max stars',
      default: '5',
      type: 'number',
      required: true,
      actions: null,
    },
    {
      attribute: 'rate',
      description: 'Rate',
      default: '',
      type: 'number',
      required: true,
      actions: null,
    },
    {
      attribute: 'icon',
      description: 'Font Awesome class',
      default: 'fas fa-star',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'readonly',
      description: 'Readonly',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'shadow',
      description: 'Shadow star',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'colorActive',
      description: 'Color active',
      default: 'warning',
      type: 'Colors | ColorTheme',
      required: true,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'colorInactive',
      description: 'Color inactive',
      default: 'gray-200',
      type: 'Colors | ColorTheme| GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'colorsActive',
      description: 'Colors active',
      default: '',
      type: 'Array<ColorTheme | Colors>',
      required: false,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
  ];

  contents = [{ attribute: '<ng-content></ng-content>', description: 'General content' }];

  rate = 2;

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-rating');
  }
}
