import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { COLORTHEMES, COLORS } from '@services/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-general-alert',
  templateUrl: './general-alert.component.html',
  styleUrls: ['./general-alert.component.scss'],
})
export class GeneralAlertComponent implements OnInit {
  colorsT = COLORTHEMES;

  colors = COLORS;

  timeClose: number;

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-alerts', 'ui-general-alert');
    this.titleService.setTitle('General alert - Swarm IO');
  }
}
