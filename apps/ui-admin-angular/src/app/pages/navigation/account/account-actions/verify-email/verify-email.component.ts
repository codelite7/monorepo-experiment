import { Component, OnInit } from '@angular/core';
import { get } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '@main/main.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NotificationService } from '@main/notification/notification.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  oobCode: string;
  apiKey: string;
  oobValid: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public mainService: MainService,
    public location: Location,
    private titleService: Title,
    public auth: AngularFireAuth,
    private router: Router,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.oobCode = get(params, 'oobCode', null);
      this.apiKey = get(params, 'apiKey', null);
      this.mainService.templateClear = true;
      this.titleService.setTitle('Verify Email Address - Swarm IO');
      this.auth
        .applyActionCode(this.oobCode)
        .then(() => {
          // successfully applied the code, reroute
          this.auth.user.subscribe((user) => {
            user?.reload().then(() => {
              this.router.navigate(['/']);
            });
          });
        })
        .catch(() => {
          this.oobValid = false;
        });
    });
  }

  sendVerificationEmail(): void {
    this.auth.user.subscribe((user) => {
      try {
        user?.sendEmailVerification().catch(() => {
          this.notificationService.error('Please try again later', 'Failed to send email');
        });
      } catch (e) {
        this.notificationService.error('Please try again later', 'Failed to send email');
      }
    });
  }
}
