import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  example = `<fz-pagination [rows]="20" [perPage]="4"></fz-pagination>`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color background',
      default: 'primary',
      type: 'Colors | ColorTheme',
      required: true,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'classPagination',
      description: 'Class pagination',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'size',
      description: 'Size pagination',
      default: '',
      type: 'large | small',
      required: false,
      actions: null,
    },
    {
      attribute: 'position',
      description: 'Position pagination',
      default: '',
      type: 'start | end | center | between | around',
      required: false,
      actions: null,
    },
    {
      attribute: 'textBtNextPrev',
      description: 'State text buttons',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'actionNumbers',
      description: 'State action numbers',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'actionsNextPrev',
      description: 'State action buttons next and prev',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'circle',
      description: 'Circle dropdown',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'iconBtNext',
      description: 'Icon button next',
      default: 'fas fa-chevron-right',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'iconBtPrevious',
      description: 'Icon button previous',
      default: 'fas fa-chevron-left',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'textBtNext',
      description: 'Text button next',
      default: 'Next',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'textBtPrevious',
      description: 'Text button previous',
      default: 'Previous',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'descPagination',
      description: 'Aria description',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'perPage',
      description: 'Total pages',
      default: '5',
      type: 'number',
      required: true,
      actions: null,
    },
    {
      attribute: 'rows',
      description: 'Total rows',
      default: '',
      type: 'number',
      required: true,
      actions: null,
    },
    {
      attribute: 'active',
      description: 'Page active',
      default: '1',
      type: 'number',
      required: true,
      actions: null,
    },
  ];

  outputs = [{ attribute: 'pageChange', description: 'Page active', type: 'number' }];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-pagination');
  }
}
