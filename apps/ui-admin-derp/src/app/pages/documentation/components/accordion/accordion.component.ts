import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  example = `<fz-accordion>
    <fz-accordion-item>
        <ng-container header>Accordion item 1</ng-container>
        Accordion content 1
    </fz-accordion-item>
    <fz-accordion-item>
        <ng-container header>Accordion item 2</ng-container>
        Accordion content 2
    </fz-accordion-item>
    <fz-accordion-item>
        <ng-container header>Accordion item 3</ng-container>
        Accordion content 3
    </fz-accordion-item>
    <fz-accordion-item>
        <ng-container header>Accordion item 4</ng-container>
        Accordion content 4
    </fz-accordion-item>
</fz-accordion>`;

  inputs = [
    {
      attribute: 'iconOpen',
      description: 'Icon open',
      default: 'fas fa-angle-down',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'iconClose',
      description: 'Icon close',
      default: 'fas fa-angle-up',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'iconStatus',
      description: 'Icon state',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'class',
      description: 'Class general',
      default: 'd-flex justify-content-between',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'padding',
      description: 'Padding general',
      default: 'true',
      type: 'boolean',
      required: true,
    },
    {
      attribute: 'color',
      description: 'Color background',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: false,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'disabled',
      description: 'Disabled item',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'marginTopOpen',
      description: 'Margin top open',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'marginBottomOpen',
      description: 'Margin bottom open',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'shadowBox',
      description: 'Box shadow',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'classBox',
      description: 'Class box',
      default: '',
      type: 'string',
      required: false,
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
      attribute: 'paddingContent',
      description: 'Padding content',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'status',
      description: 'State init',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  contents = [
    { attribute: 'header', description: 'Header content accordion' },
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content accordion',
    },
  ];

  contents2 = [{ attribute: '<ng-content></ng-content>', description: 'Accordion items' }];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-accordion');
  }
}
