import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { NotificationService, POSITIONS } from '@main/notification/notification.service';
import { COLORS, COLORTHEMES, ANIMATE } from '@services/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-floating-notifications',
  templateUrl: './floating-notifications.component.html',
  styleUrls: ['./floating-notifications.component.scss'],
})
export class FloatingNotificationsComponent implements OnInit {
  colors: string[];

  positions = POSITIONS;

  animates = ANIMATE;

  options = {
    title: '',
    message: 'Test notification',
    color: 'danger',
    position: 'left-top',
    animate: 'bounceIn',
    statusClose: true,
    stateProgress: true,
    duration: '10000',
  };

  constructor(
    public mainNavService: MainNavService,
    public notificationService: NotificationService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.colors = [...COLORS, ...COLORTHEMES];

    this.mainNavService.selectedItem('ui-alerts', 'ui-floating-notification');
    this.titleService.setTitle('Floating notifications - Swarm IO');
  }
}
