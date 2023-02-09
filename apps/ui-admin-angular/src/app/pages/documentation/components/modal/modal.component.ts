import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  example = `<button fzButton color="primary" (click)="modal1.show()">
    Open modal
</button>

<fz-modal headerTitle="Welcome" footerPosition="end" #modal1>
    <ng-container content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    </ng-container>
    <ng-container footer>
        <button fzButton color="primary" (click)="modal1.hide()">Close</button>
    </ng-container>
</fz-modal>`;

  inputs = [
    {
      attribute: 'backgroundOverlay',
      description: 'Color background overlay',
      default: 'dark',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'backgroundContainer',
      description: 'Color background container',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
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
      attribute: 'headerTitle',
      description: 'Header title',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'classHeader',
      description: 'Class header',
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
      attribute: 'headerClose',
      description: 'State header close',
      default: 'false',
      type: 'boolean',
      required: true,
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
      attribute: 'backdropBlur',
      description: 'Backdrop blur',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'paddingHeader',
      description: 'Padding header',
      default: 'true',
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
      attribute: 'paddingFooter',
      description: 'Padding footer',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'borderHeader',
      description: 'Border header',
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
    {
      attribute: 'shadow',
      description: 'Shadow',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'clickedOutside',
      description: 'Click outside hide',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'scrollable',
      description: 'Scrollable',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'centered',
      description: 'Centered',
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
      attribute: 'loadingHideHeaders',
      description: 'Loading hide headers',
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
      attribute: 'notificationBodyHideHeaders',
      description: 'Notification body hide headers',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'classLoadingBody',
      description: 'Class loading body',
      default: 'modal-loading-body',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'fullMode',
      description: 'Full mode',
      default: '',
      type: 'left | right | full',
      required: false,
      actions: null,
    },
    {
      attribute: 'footerPosition',
      description: 'Footer position',
      default: '',
      type: 'start | end | center | between',
      required: false,
      actions: null,
    },
    {
      attribute: 'size',
      description: 'Size modal',
      default: '',
      type: 'sm | lg | xl',
      required: false,
      actions: null,
    },
    {
      attribute: 'animated',
      description: 'Animated',
      default: 'bounceInDown',
      type: 'animate.css',
      required: false,
      actions: { animate: true },
    },
    {
      attribute: 'zIndex',
      description: 'Zindex',
      default: '',
      type: 'number',
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
  ];

  outputs = [
    { attribute: 'onShow', description: 'Show modal', type: 'boolean' },
    { attribute: 'onHide', description: 'Hide modal', type: 'boolean' },
  ];

  contents = [
    { attribute: 'header', description: 'Header area' },
    { attribute: 'content', description: 'Content area' },
    { attribute: 'loading', description: 'Loading area' },
    { attribute: 'footer', description: 'Footer area' },
    { attribute: 'notification', description: 'Notification area' },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-modal');
  }
}
