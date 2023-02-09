import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-loading-circle',
  templateUrl: './loading-circle.component.html',
  styleUrls: ['./loading-circle.component.scss'],
})
export class LoadingCircleComponent implements OnInit {
  example = `<fz-loading-circle borderColor="primary"></fz-loading-circle>`;

  inputs = [
    {
      attribute: 'borderColor',
      description: 'Border color',
      default: 'primary',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'color',
      description: 'Color general',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'size',
      description: 'Size loading',
      default: '40',
      type: 'number',
      required: true,
      actions: null,
    },
    {
      attribute: 'border',
      description: 'Border loading',
      default: '4',
      type: 'number',
      required: true,
      actions: null,
    },
    {
      attribute: 'duration',
      description: 'Duration loading',
      default: '0.9',
      type: 'number',
      required: true,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-loading-circle');
  }
}
