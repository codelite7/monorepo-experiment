import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-others', 'ui-progress');
    this.titleService.setTitle('Progress - Swarm IO');
  }
}
