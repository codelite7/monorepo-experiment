import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fz-dropdown-notifications',
  templateUrl: './dropdown-notifications.component.html',
  styleUrls: ['./dropdown-notifications.component.scss'],
})
export class DropdownNotificationsComponent implements OnInit {
  state = true;

  notifications = [];

  constructor() {}

  ngOnInit(): void {}

  action(event) {
    this.state = false;
    event.unread = false;

    // redirect route here
  }
}
