import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  table = [
    {
      col1: 'Value 1',
      col2: 'Value 2',
      col3: 'Value 3',
      col4: 'Value 4',
      class: 'table-danger',
      shadow: '',
    },
    {
      col1: 'Value 1',
      col2: 'Value 2',
      col3: 'Value 3',
      col4: 'Value 4',
      class: 'table-success',
      shadow: '',
    },
    {
      col1: 'Value 1',
      col2: 'Value 2',
      col3: 'Value 3',
      col4: 'Value 4',
      class: 'table-warning',
      shadow: 'table-tr-shadow',
    },
    {
      col1: 'Value 1',
      col2: 'Value 2',
      col3: 'Value 3',
      col4: 'Value 4',
      class: 'table-info',
      shadow: '',
    },
  ];

  example = `<fz-table>
    <tr header>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
        <th>Header 4</th>
    </tr>
    <tr *ngFor="let item of table">
        <td>{{ item.col1 }}</td>
        <td>{{ item.col2 }}</td>
        <td>{{ item.col3 }}</td>
        <td>{{ item.col4 }}</td>
    </tr>
</fz-table>`;

  inputs = [
    {
      attribute: 'striped',
      description: 'Striped table',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'bordered',
      description: 'Bordered table',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'borderless',
      description: 'Borderless table',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'dark',
      description: 'Dark table',
      default: '',
      type: 'boolean',
      required: false,
      actions: null,
    },
    {
      attribute: 'hover',
      description: 'Hover table',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'small',
      description: 'Small table',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'responsive',
      description: 'Responsive table',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'shadow',
      description: 'Shadow table',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'theadDark',
      description: 'Thead dark table',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'theadLight',
      description: 'Thead light table',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  contents = [
    { attribute: 'header', description: 'Header area' },
    { attribute: 'footer', description: 'Footer area' },
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content table',
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-table');
  }
}
