import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { COLORS, COLORTHEMES } from '@services/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  colors: string[];

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.colors = [...COLORS, ...COLORTHEMES];

    this.mainNavService.selectedItem('ui-others', 'ui-badge');
    this.titleService.setTitle('Badge - Swarm IO');
  }
}
