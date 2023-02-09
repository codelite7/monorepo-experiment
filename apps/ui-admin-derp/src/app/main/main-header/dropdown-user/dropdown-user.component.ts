import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'fz-dropdown-user',
  templateUrl: './dropdown-user.component.html',
  styleUrls: ['./dropdown-user.component.scss'],
})
export class DropdownUserComponent implements OnInit {
  state = true;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}

  fullScreen() {
    this.state = false;
    this.mainService.fullScreenWindowId('main');
  }
}
