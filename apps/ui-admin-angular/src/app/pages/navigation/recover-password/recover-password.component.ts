import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  constructor(public mainService: MainService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Recover password - Swarm IO');
  }
}
