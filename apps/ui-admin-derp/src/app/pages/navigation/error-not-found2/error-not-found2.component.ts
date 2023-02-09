import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-not-found2',
  templateUrl: './error-not-found2.component.html',
  styleUrls: ['./error-not-found2.component.scss'],
})
export class ErrorNotFound2Component implements OnInit {
  constructor(public mainService: MainService, public location: Location, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Not found - Swarm IO');
  }
}
