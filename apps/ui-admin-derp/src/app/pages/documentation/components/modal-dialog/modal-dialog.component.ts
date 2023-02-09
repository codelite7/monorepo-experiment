import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent implements OnInit {
  example = `<button fzButton color="primary" (click)="modal.show()">
    Open modal
</button>

<fz-modal-dialog [confirmClose]="true" #modal>
    <ng-container icon><i class="fas fa-exclamation-circle"></i></ng-container>
    <div text>
        <h5 class="text-center">Are you sure you want to delete?</h5>
        <p class="text-center">This cannot be undone in the future.</p>
    </div>
    <ng-container buttons>
        <button class="mr-2" fzButton [rounded]="true" size="lg" color="primary" (click)="modal.confirm()">Yes</button>
        <button fzButton [rounded]="true" size="lg" color="dark" (click)="modal.hide()">No</button>
    </ng-container>
</fz-modal-dialog>`;

  inputs = [
    {
      attribute: 'backgroundContainer',
      description: 'Color background container',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'animationIcon',
      description: 'Animated icon',
      default: 'swing',
      type: 'animate.css',
      required: true,
      actions: { animate: true },
    },
    {
      attribute: 'ariaDescription',
      description: 'Aria description',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'classBody',
      description: 'Class body',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'classFooter',
      description: 'Class footer',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'closeFloating',
      description: 'State header close floating',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'loadingBody',
      description: 'Loading body',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'notificationBody',
      description: 'Notification body',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'footerPosition',
      description: 'Footer position',
      default: 'center',
      type: 'start | end | center | between',
      required: false,
      actions: null,
    },
    {
      attribute: 'timeHide',
      description: 'Duration modal (ms)',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
    {
      attribute: 'confirmClose',
      description: 'Confirm close',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'confirmLoading',
      description: 'Confirm loading',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'confirmNotification',
      description: 'Confirm notification',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'paddingBody',
      description: 'Padding body',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'borderFooter',
      description: 'Border footer',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  outputs = [
    { attribute: 'onShow', description: 'Show modal', type: 'boolean' },
    { attribute: 'onHide', description: 'Hide modal', type: 'boolean' },
    {
      attribute: 'onConfirm',
      description: 'Confirme button state',
      type: 'boolean',
    },
  ];

  contents = [
    { attribute: 'icon', description: 'Icon area' },
    { attribute: 'text', description: 'Text area' },
    { attribute: 'loading', description: 'Loading area' },
    { attribute: 'notification', description: 'Notification area' },
    { attribute: 'buttons', description: 'Buttons area' },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-modal-dialog');
  }
}
