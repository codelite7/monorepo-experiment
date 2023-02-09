import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-server2',
  templateUrl: './error-server2.component.html',
  styleUrls: ['./error-server2.component.scss'],
})
export class ErrorServer2Component implements OnInit {
  constructor(public mainService: MainService, public location: Location, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Error server v2 - Swarm IO');
  }
}
