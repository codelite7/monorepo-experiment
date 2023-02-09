import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  example = `<fz-tab-group color="success">
    <fz-tab label="Tab 1">
        <div class="py-3">Content Tab 1 </div>
    </fz-tab>
    <fz-tab [active]="true" label="Tab 2">
        <div class="py-3">Content Tab 2 </div>
    </fz-tab>
    <fz-tab label="Tab 3">
        <div class="py-3">Content Tab 3 </div>
    </fz-tab>
</fz-tab-group>`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color tab',
      default: 'primary',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'position',
      description: 'Position tab',
      default: 'start',
      type: 'start | end | center | between | around',
      required: true,
      actions: null,
    },
    {
      attribute: 'classContent',
      description: 'Class content',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'classTab',
      description: 'Class tab',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'type',
      description: 'Type tab',
      default: 'tabs',
      type: 'pills | tabs',
      required: true,
      actions: null,
    },
    {
      attribute: 'justified',
      description: 'Justified tab',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  outputs = [
    {
      attribute: 'currentTab',
      description: 'Current tab',
      type: 'TabComponent',
    },
  ];

  contents = [
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content tab group',
    },
  ];

  inputs2 = [
    {
      attribute: 'active',
      description: 'Active tab',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'disabled',
      description: 'Disabled tab',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'label',
      description: 'Label tab',
      default: '',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'animate',
      description: 'Animate container',
      default: 'fadeIn',
      type: 'animate.css',
      required: true,
      actions: { animate: true },
    },
  ];

  contents2 = [
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content tab',
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-tab');
  }
}
