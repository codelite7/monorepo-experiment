import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-loading-circle2',
  templateUrl: './loading-circle2.component.html',
  styleUrls: ['./loading-circle2.component.scss'],
})
export class LoadingCircle2Component implements OnInit {
  example = `<fz-loading-circle2 color="primary"></fz-loading-circle2>`;

  inputs = [
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
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-loading-circle2');
  }
}
