import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lockscreen2',
  templateUrl: './lockscreen2.component.html',
  styleUrls: ['./lockscreen2.component.scss'],
})
export class Lockscreen2Component implements OnInit {
  constructor(public mainService: MainService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Lockscreen v2 - Swarm IO');
  }
}
