import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(public mainService: MainService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Register user - Swarm IO');
  }
}
