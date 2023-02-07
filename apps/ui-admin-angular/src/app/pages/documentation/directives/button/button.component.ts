import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  example = `<button fzButton color="primary">Primary</button>`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color button',
      default: '',
      type: 'Colors | ColorTheme',
      required: false,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'outline',
      description: 'Outline button',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'link',
      description: 'Link button',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'activeB',
      description: 'Active button',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'blockB',
      description: 'Center block',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'disabledB',
      description: 'Disabled button',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'rounded',
      description: 'Rounded button',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'circle',
      description: 'Circle button',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'lrLargeB',
      description: 'Button large right and left ',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'size',
      description: 'Size button ',
      default: '',
      type: 'sm | lg',
      required: false,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-directives-button');
  }
}
