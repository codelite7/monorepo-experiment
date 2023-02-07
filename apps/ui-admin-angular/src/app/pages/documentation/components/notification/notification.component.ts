import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { NotificationService, POSITIONS } from '@main/notification/notification.service';
import { COLORS, COLORTHEMES, ANIMATE } from '@services/model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  colors: string[];

  positions = POSITIONS;

  animates = ANIMATE;

  options = {
    title: '',
    message: 'Test notification',
    color: 'primary',
    position: 'center-bottom',
    animate: 'bounceIn',
    statusClose: true,
    stateProgress: true,
    duration: '',
  };

  use = `constructor(public notificationService: NotificationService) { }`;

  inputs = [
    {
      attribute: 'color',
      description: 'Color notification',
      default: 'primary',
      type: 'Colors | ColorTheme',
      required: true,
      actions: { gray: false, colors: true, colorsTheme: true },
    },
    {
      attribute: 'title',
      description: 'Title notification',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'message',
      description: 'Message notification',
      default: '',
      type: 'string',
      required: true,
      actions: null,
    },
    {
      attribute: 'position',
      description: 'Position notification',
      default: 'center-bottom',
      type: 'left-top | left-bottom | center-top | center-bottom | right-top | right-bottom',
      required: true,
      actions: null,
    },
    {
      attribute: 'animated',
      description: 'Animated notification',
      default: 'bounceIn',
      type: 'animate.css',
      required: true,
      actions: { animate: true },
    },
    {
      attribute: 'statusClose',
      description: 'Status button close',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'stateProgress',
      description: 'Status progress bar',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'imgTitle',
      description: 'Src image',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'icon',
      description: 'Icon notification',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'link',
      description: 'Link notification',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'routerLink',
      description: 'Router link notification',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'duration',
      description: 'Duration notification (ms)',
      default: '',
      type: 'number',
      required: false,
      actions: null,
    },
  ];

  constructor(public notificationService: NotificationService, public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.colors = [...COLORS, ...COLORTHEMES];

    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-notification');
  }
}
