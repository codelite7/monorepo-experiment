import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NotificationService } from '@main/notification/notification.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmailComponent implements OnInit {
  constructor(
    public mainService: MainService,
    public mainNavService: MainNavService,
    private titleService: Title,
    public auth: AngularFireAuth,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('');
    this.titleService.setTitle('Error - Swarm IO');
  }

  resendEmailVerification(): void {
    const errorMessage = 'Refresh the page and try again';
    const errorTitle = 'Error Sending Email';
    this.auth.user.subscribe((user) => {
      if (user) {
        try {
          user
            .sendEmailVerification()
            .then(() => {
              this.notificationService.success(
                'Follow the link in the email to verify your email address',
                'Email Sent!'
              );
            })
            .catch((e) => {
              this.notificationService.error(errorMessage, errorTitle);
            });
        } catch (e) {
          this.notificationService.error(errorMessage, errorTitle);
        }
      }
    });
  }
}
