import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements OnInit {
  example = `<fz-loading-bar color="primary"></fz-loading-bar>`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color general',
      default: 'primary',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'colorLine',
      description: 'Color line',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'heightLine',
      description: 'Line height',
      default: '3',
      type: 'number',
      required: true,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-loading-bar');
  }
}
