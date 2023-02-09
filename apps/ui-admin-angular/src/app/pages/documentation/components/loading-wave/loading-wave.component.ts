import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-loading-wave',
  templateUrl: './loading-wave.component.html',
  styleUrls: ['./loading-wave.component.scss'],
})
export class LoadingWaveComponent implements OnInit {
  example = `<fz-loading-wave color="primary"></fz-loading-wave>`;

  inputs = [
    {
      attribute: 'borderSize',
      description: 'Border size loading',
      default: '4',
      type: 'number',
      required: true,
      actions: null,
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
      attribute: 'color',
      description: 'Color loading',
      default: 'primary',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-loading-wave');
  }
}
