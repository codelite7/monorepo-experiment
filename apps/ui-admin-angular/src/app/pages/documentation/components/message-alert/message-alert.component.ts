import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.scss'],
})
export class MessageAlertComponent implements OnInit {
  example = `<fz-message-alert type="error">
    <ng-container title>
        Oops something went wrong
    </ng-container>
    <ng-container description>
        Check all data and try again
    </ng-container>
    <ng-container buttons>
        <button fzButton color="danger" [lrLargeB]="true">Try again</button>
    </ng-container>
</fz-message-alert>`;

  inputs = [
    {
      attribute: 'background',
      description: 'Color background',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'type',
      description: 'Type message',
      default: '',
      type: 'error | success | warning',
      required: true,
      actions: null,
    },
    {
      attribute: 'iconError',
      description: 'Icon error',
      default: 'fas fa-times',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'iconSuccess',
      description: 'Icon success',
      default: 'fas fa-check',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'iconWarning',
      description: 'Icon success',
      default: 'fas fa-exclamation',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'classIcon',
      description: 'Class icon',
      default: 'd-flex justify-content-center',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'classText',
      description: 'Class text',
      default: 'd-flex justify-content-center flex-column text-center',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'timeHideSuccess',
      description: 'Time hide success (ms)',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
    {
      attribute: 'timeHideWarning',
      description: 'Time hide warning (ms)',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
    {
      attribute: 'timeHideError',
      description: 'Time hide error (ms)',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
  ];

  outputs = [{ attribute: 'onClose', description: 'State message', type: 'boolean' }];

  contents = [
    { attribute: 'title', description: 'Title area' },
    { attribute: 'description', description: 'Description area' },
    { attribute: 'buttons', description: 'Buttons area' },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-message-alert');
  }
}
