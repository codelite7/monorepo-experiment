import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  example = `<fz-progress><div fzProgressItem colorPI="primary" [sizePI]="50">50%</div></fz-progress>`;

  inputs = [
    {
      attribute: 'height',
      description: 'Bar height',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
  ];

  contents = [
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content progress',
    },
  ];

  inputs2 = [
    {
      attribute: 'colorPI',
      description: 'Color bar',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: false,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'sizePI',
      description: 'Size bar',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
    {
      attribute: 'stripedPI',
      description: 'Striped bar',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'animatedPI',
      description: 'Animated striped bar',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'classPI',
      description: 'Class item',
      default: '',
      type: 'Array<string>',
      required: false,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-progress');
  }
}
