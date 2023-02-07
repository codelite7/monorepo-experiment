import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-loading-circle-dot',
  templateUrl: './loading-circle-dot.component.html',
  styleUrls: ['./loading-circle-dot.component.scss'],
})
export class LoadingCircleDotComponent implements OnInit {
  example = `<fz-loading-circle-dot></fz-loading-circle-dot>`;

  inputs = [
    {
      attribute: 'size',
      description: 'Size loading',
      default: '30',
      type: 'number',
      required: true,
      actions: null,
    },
    {
      attribute: 'color1',
      description: 'Color dot 1',
      default: 'success',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'color2',
      description: 'Color dot 2',
      default: 'warning',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'color3',
      description: 'Color dot 3',
      default: 'danger',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'color4',
      description: 'Color dot 4',
      default: 'info',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-loading-circle-dot');
  }
}
