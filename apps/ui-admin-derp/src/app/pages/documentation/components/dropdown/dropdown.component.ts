import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  example = `<fz-dropdown>
    <button class="mr-2 mb-2" button fzButton color="primary">Dropdown <i class="fas fa-chevron-down"></i></button>
    <a fzDropdownItem href="javascript:void(0);">My profile </a>
    <a fzDropdownItem href="javascript:void(0);">My inbox </a>
    <a fzDropdownItem href="javascript:void(0);">My Tasks </a>
</fz-dropdown>`;

  inputs = [
    {
      attribute: 'classBt',
      description: 'Class button',
      default: '',
      type: 'string',
      required: false,
      link: null,
    },
    {
      attribute: 'classContainer',
      description: 'Class container',
      default: 'd-flex flex-column',
      type: 'string',
      required: false,
      link: null,
    },
    {
      attribute: 'direction',
      description: 'Direction dropdown',
      default: 'auto',
      type: 'tippy.js',
      required: true,
      link: 'https://atomiks.github.io/tippyjs/v6/all-props/#placement',
    },
    {
      attribute: 'trigger',
      description: 'Trigger dropdown',
      default: 'trigger',
      type: 'tippy.js',
      required: true,
      link: 'https://atomiks.github.io/tippyjs/v6/all-props/#trigger',
    },
    {
      attribute: 'animation',
      description: 'Animation dropdown',
      default: 'shift-away',
      type: 'scale | perspective | shift-toward | shift-away',
      required: true,
      link: null,
    },
    {
      attribute: 'theme',
      description: 'Theme dropdown',
      default: 'light',
      type: 'light | dark',
      required: true,
      link: null,
    },
    {
      attribute: 'hoverItem',
      description: 'Color hover item',
      default: 'color',
      type: 'color | gray',
      required: false,
      link: null,
    },
    {
      attribute: 'arrow',
      description: 'Arrow dropdown',
      default: 'true',
      type: 'tippy.js',
      required: true,
      link: 'https://atomiks.github.io/tippyjs/v6/all-props/#arrow',
    },
    {
      attribute: 'maxWidth',
      description: 'Max width dropdown',
      default: '',
      type: 'tippy.js',
      required: false,
      link: 'https://atomiks.github.io/tippyjs/v6/all-props/#maxwidth',
    },
    {
      attribute: 'zIndex',
      description: 'Zindex dropdown',
      default: '',
      type: 'tippy.js',
      required: false,
      link: 'https://atomiks.github.io/tippyjs/v6/all-props/#zindex',
    },
    {
      attribute: 'show',
      description: 'State initial',
      default: '',
      type: 'boolean',
      required: false,
      link: null,
    },
    {
      attribute: 'state',
      description: 'Control open dropdown',
      default: '',
      type: 'boolean',
      required: false,
      link: null,
    },
    {
      attribute: 'closeClickOutside',
      description: 'Close click outside',
      default: 'true',
      type: 'boolean',
      required: true,
      link: null,
    },
    {
      attribute: 'appendTo',
      description: 'AppendTo',
      default: '',
      type: 'tippy.js',
      required: false,
      link: 'https://atomiks.github.io/tippyjs/v6/all-props/#appendto',
    },
    {
      attribute: 'contentPadding0',
      description: 'Content padding 0',
      default: 'false',
      type: 'boolean',
      required: true,
      link: null,
    },
    {
      attribute: 'minWidth',
      description: 'Min width dropdwon',
      default: '',
      type: 'number',
      required: false,
      link: null,
    },
  ];

  outputs = [
    {
      attribute: 'stateOn',
      description: 'State control dropdown open and close',
      type: 'boolean',
    },
  ];

  contents = [
    { attribute: 'button', description: 'Button area' },
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content dropdown',
    },
  ];

  inputs2 = [
    {
      attribute: 'activeDI',
      description: 'Item active',
      default: 'false',
      type: 'boolean',
      required: false,
    },
    {
      attribute: 'disabledDI',
      description: 'Item disabled',
      default: 'false',
      type: 'boolean',
      required: false,
    },
    {
      attribute: 'dividerDI',
      description: 'Divider line',
      default: 'false',
      type: 'boolean',
      required: false,
    },
    {
      attribute: 'headerDI',
      description: 'Header text',
      default: 'false',
      type: 'boolean',
      required: false,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-dropdown');
  }
}
