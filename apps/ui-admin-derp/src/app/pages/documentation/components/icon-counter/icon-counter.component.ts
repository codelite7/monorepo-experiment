import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-icon-counter',
  templateUrl: './icon-counter.component.html',
  styleUrls: ['./icon-counter.component.scss'],
})
export class IconCounterComponent implements OnInit {
  example = `<fz-icon-counter [size]="22" [counter]="5" animatedIcon="" animatedBalloon="" color="primary" icon="fas fa-address-book"></fz-icon-counter>`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color counter',
      default: 'primary',
      type: 'Colors | ColorTheme',
      required: true,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'icon',
      description: 'Font awesome icon',
      default: '',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'animatedIcon',
      description: 'Animate icon',
      default: 'swing',
      type: 'animate.css',
      required: false,
      actions: { animate: true },
    },
    {
      attribute: 'animatedBalloon',
      description: 'Animate balloon',
      default: 'slideInUp',
      type: 'animate.css',
      required: false,
      actions: { animate: true },
    },
    {
      attribute: 'animatedIconInfinite',
      description: 'Animate icon infinite',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'animatedBalloonInfinite',
      description: 'Animate balloon infinite',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'dot',
      description: 'Counter dot',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'size',
      description: 'Size icon',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-icon-counter');
  }
}
