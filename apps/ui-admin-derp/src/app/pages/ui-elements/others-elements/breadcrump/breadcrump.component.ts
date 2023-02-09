import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.scss'],
})
export class BreadcrumpComponent implements OnInit {
  constructor(public mainService: MainService, public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-others', 'ui-breadcrumb');
    this.titleService.setTitle('Breadcrumb - Swarm IO');
  }
}
