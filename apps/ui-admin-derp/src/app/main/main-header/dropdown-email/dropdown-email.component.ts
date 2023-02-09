import { Component, OnInit } from '@angular/core';
import { FloatingCardService } from '@main/floating-card/floating-card.service';
import { SendEmailComponent } from '@shared/navigation/send-email/send-email.component';

@Component({
  selector: 'fz-dropdown-email',
  templateUrl: './dropdown-email.component.html',
  styleUrls: ['./dropdown-email.component.scss'],
})
export class DropdownEmailComponent implements OnInit {
  state = false;

  constructor(public floatingCardService: FloatingCardService) {}

  ngOnInit(): void {}

  newEmail() {
    this.floatingCardService.show();
    this.floatingCardService.load({
      component: SendEmailComponent,
      params: [{ param: 'floatingCard', value: true }],
    });
    this.state = false;
  }
}
