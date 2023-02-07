import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NotificationService } from '@main/notification/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password2',
  templateUrl: './recover-password2.component.html',
  styleUrls: ['./recover-password2.component.scss'],
})
export class RecoverPassword2Component implements OnInit {
  public resetPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public mainService: MainService,
    private titleService: Title,
    public auth: AngularFireAuth,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Swarm IO - Forgot Password');
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
    });
  }

  sendResetEmail(): void {
    const email = this.resetPasswordForm.get('email')?.value;
    this.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.notificationService.success('Check your email to reset your password', 'Email Sent');
      })
      .catch((error) => {
        let errorMessage;
        switch (error) {
          case 'auth/invalid-email':
            errorMessage = 'Email address is invalid';
            break;
          case 'auth/user-not-found':
            errorMessage = 'Couldn&apos;t find a user with that email';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'You&apos;re sending too many requests. Please try again later';
            break;
          default:
            errorMessage = 'An unknown error occurred. Please try again later';
            break;
        }
        this.notificationService.error(errorMessage, 'Error Resetting Password');
      });
  }
}
