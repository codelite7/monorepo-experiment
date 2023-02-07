import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-server',
  templateUrl: './error-server.component.html',
  styleUrls: ['./error-server.component.scss'],
})
export class ErrorServerComponent implements OnInit {
  constructor(public mainService: MainService, public location: Location, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Error server - Swarm IO');
  }
}
