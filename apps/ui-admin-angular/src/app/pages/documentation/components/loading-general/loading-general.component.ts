import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { COLORS, COLORTHEMES, GRAYCOLORS } from '@services/model';

@Component({
  selector: 'app-loading-general',
  templateUrl: './loading-general.component.html',
  styleUrls: ['./loading-general.component.scss'],
})
export class LoadingGeneralComponent implements OnInit {
  colorsC: string[];

  types = [
    { type: 1, value: 'Loading circle' },
    { type: 2, value: 'Loading circle 2' },
    { type: 3, value: 'Loading dot' },
    { type: 4, value: 'Loading wave' },
    { type: 5, value: 'Loading icon' },
  ];

  options = {
    type: 1,
    areaCard: true,
    backgroundOverlay: 'gray-900',
    color: 'primary',
    statusOverlay: true,
  };

  use = `constructor(public loadingService: LoadingGeneralService) { }`;

  inputs = [
    {
      attribute: 'backgroundOverlay',
      description: 'Color background overlay',
      default: 'gray-900',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'color',
      description: 'Color loading',
      default: 'primary',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'statusOverlay',
      description: 'State overlay',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'icon',
      description: 'Icon loading type 5',
      default: 'fas fa-cog fa-spin',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'areaCard',
      description: 'State card',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'type',
      description: 'Type loading',
      default: '1',
      type: '1 | 2 | 3 | 4 | 5',
      required: true,
      actions: null,
    },
  ];

  constructor(public loadingService: LoadingGeneralService, public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.colorsC = [...COLORS, ...COLORTHEMES, ...GRAYCOLORS];

    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-loading-general');
  }
}
