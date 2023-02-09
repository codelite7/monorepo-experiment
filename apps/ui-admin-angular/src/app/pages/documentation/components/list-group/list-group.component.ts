import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss'],
})
export class ListGroupComponent implements OnInit {
  example = `<fz-list-group>
    <li fzListGroupItem>Cras justo odio</li>
    <li fzListGroupItem>Dapibus ac facilisis in</li>
    <li fzListGroupItem>Morbi leo risus</li>
    <li fzListGroupItem>Porta ac consectetur ac</li>
    <li fzListGroupItem>Vestibulum at eros</li>
</fz-list-group>`;

  inputs = [
    {
      attribute: 'flush',
      description: 'flush mode',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'horizontal',
      description: 'Horizontal mode',
      default: '',
      type: 'default | sm | md | lg | xl',
      required: false,
      actions: null,
    },
  ];

  contents = [
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content list group',
    },
  ];

  inputs2 = [
    {
      attribute: 'colorLGI',
      description: 'Color item',
      default: '',
      type: 'ColorTheme',
      required: false,
      actions: { gray: false, colors: false, colorsTheme: true },
    },
    {
      attribute: 'classLGI',
      description: 'Class item',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'disabledLGI',
      description: 'Disabled item',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'actionLGI',
      description: 'Link item',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'activeLGI',
      description: 'Active item',
      default: 'false',
      type: 'boolean',
      required: false,
      actions: null,
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-list-group');
  }
}
