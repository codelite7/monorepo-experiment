import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { COLORS, COLORTHEMES, GRAYCOLORS } from '@services/model';
import { MainService } from '@main/main.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-loadings',
  templateUrl: './loadings.component.html',
  styleUrls: ['./loadings.component.scss'],
})
export class LoadingsComponent implements OnInit {
  colors: string[];

  colorsC: string[];

  options = {
    type: 1,
    areaCard: true,
    backgroundOverlay: 'gray-900',
    color: 'primary',
    statusOverlay: true,
  };

  types = [
    { type: 1, value: 'Loading circle' },
    { type: 2, value: 'Loading circle 2' },
    { type: 3, value: 'Loading dot' },
    { type: 4, value: 'Loading wave' },
    { type: 5, value: 'Loading icon' },
  ];

  constructor(
    public mainService: MainService,
    public mainNavService: MainNavService,
    public loadingService: LoadingGeneralService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.colors = [...COLORS];
    this.colorsC = [...COLORS, ...COLORTHEMES, ...GRAYCOLORS];

    this.mainNavService.selectedItem('ui-others', 'ui-loadings');
    this.titleService.setTitle('Loadings - Swarm IO');
  }
}
