import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { COLORTHEMES } from '@services/model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  colorsT = COLORTHEMES;

  example = `<fz-alert color="primary">
    A simple primary alert with <a class="alert-link" href="javascript:void(0);">an example link</a>. Give it a click if you like.
</fz-alert>`;

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
      attribute: 'buttonClose',
      description: 'State button',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'timeClose',
      description: 'Duration alert (ms)',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
  ];

  contents = [
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content alert',
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-alert');
  }
}
