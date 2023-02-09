import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-messages-alert',
  templateUrl: './messages-alert.component.html',
  styleUrls: ['./messages-alert.component.scss'],
})
export class MessagesAlertComponent implements OnInit {
  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-alerts', 'ui-messages-alert');
    this.titleService.setTitle('Messages alert - Swarm IO');
  }
}
