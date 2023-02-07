import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { COLORTHEMES, COLORS } from '@services/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  colors = COLORTHEMES;

  colors2 = COLORS;

  loading = false;

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-others', 'ui-buttons');
    this.titleService.setTitle('Buttons - Swarm IO');
  }
}
