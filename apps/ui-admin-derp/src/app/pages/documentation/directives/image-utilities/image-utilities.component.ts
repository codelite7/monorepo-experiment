import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-image-utilities',
  templateUrl: './image-utilities.component.html',
  styleUrls: ['./image-utilities.component.scss'],
})
export class ImageUtilitiesComponent implements OnInit {
  example = `<img src="assets/images/user-profile.jpg" fzImageUtilities [widthHeight]="60" [circle]="true" [crop]="true" [shadow]="false">`;

  inputs = [
    {
      attribute: 'colorActive',
      description: 'Color active border',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: false,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'border',
      description: 'Border image',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'active',
      description: 'Active border',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'shadow',
      description: 'Shadow image',
      default: 'true',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'circle',
      description: 'Circle image',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'crop',
      description: 'Crop image',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'widthHeight',
      description: 'Width and height image',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
    {
      attribute: 'widthIU',
      description: 'Width image',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'heightIU',
      description: 'Height image',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-directives-others', 'doc-directives-image');
  }
}
