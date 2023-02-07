import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss'],
})
export class CircularProgressComponent implements OnInit {
  example = `<div class="row"><div class="col-2"><fz-circular-progress color="primary" [size]="50" text="$ 25"></fz-circular-progress></div></div>`;

  inputs = [
    {
      attribute: 'size',
      description: 'Percentage - 1 to 100',
      default: '0',
      type: 'number',
      required: false,
      actions: null,
    },
    {
      attribute: 'text',
      description: 'Center text',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'color',
      description: 'Color active',
      default: 'dark',
      type: 'Colors | ColorTheme',
      required: false,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'animationTime',
      description: 'Animation - Ex: 1s',
      default: '1.5s',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'strokeCircle',
      description: 'Stroke circle',
      default: '3',
      type: 'number',
      required: false,
      actions: null,
    },
    {
      attribute: 'strokeCircleBg',
      description: 'Stroke circle active',
      default: '2.5',
      type: 'number',
      required: false,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-circular-progress');
  }
}
