import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public mainService: MainService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Login - Swarm IO');
  }
}
