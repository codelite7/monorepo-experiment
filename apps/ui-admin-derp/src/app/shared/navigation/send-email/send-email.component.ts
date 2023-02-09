import { Component, OnInit, Input } from '@angular/core';
import { FloatingCardService } from '@main/floating-card/floating-card.service';

@Component({
  selector: 'fz-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent implements OnInit {
  @Input() floatingCard = false;

  @Input() email = '';

  form = {
    email: '',
    subject: '',
    message: '',
  };

  constructor(public floatingCardService: FloatingCardService) {}

  ngOnInit(): void {
    this.form.email = this.email;
  }
}
