import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  rate = 4;

  rate2 = 4;

  rate3 = 3;

  rate4 = 4;

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-others', 'ui-rating');
    this.titleService.setTitle('Rating - Swarm IO');
  }
}
