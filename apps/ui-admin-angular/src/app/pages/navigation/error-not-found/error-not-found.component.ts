import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.scss'],
})
export class ErrorNotFoundComponent implements OnInit {
  constructor(public mainService: MainService, public location: Location, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Not found - Swarm IO');
  }
}
