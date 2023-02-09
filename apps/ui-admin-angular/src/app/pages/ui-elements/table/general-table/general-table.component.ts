import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
})
export class GeneralTableComponent implements OnInit {
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

  constructor(public mainService: MainService, public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-tables', 'ui-general-table');
    this.titleService.setTitle('General table - Swarm IO');
  }
}
