import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { passwordsMatchValidator } from '../../../account/account-actions/reset-password/reset-password.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { finalize, first, map, switchMap } from 'rxjs/operators';
import firebase from 'firebase/compat';
import { UsersService } from '@services/security/users.service';
import { Router } from '@angular/router';
import User = firebase.User;

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  public changePasswordForm: FormGroup;
  header: string;
  redirectAfterChange = false;

  constructor(
    public mainNavService: MainNavService,
    private titleService: Title,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    public loadingService: LoadingGeneralService,
    private auth: AngularFireAuth,
    private usersService: UsersService,
    public router: Router
  ) {}

  get password1() {
    return this.changePasswordForm.get('password1');
  }

  get password2() {
    return this.changePasswordForm.get('password2');
  }

  ngOnInit(): void {
    this.mainNavService.selectedItem('nav-changepassword');
    this.titleService.setTitle('Change Password - Swarm IO');
    this.changePasswordForm = this.fb.group(
      {
        password1: [
          '',
          [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
        ],
        password2: [
          '',
          [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
        ],
      },
      { validators: passwordsMatchValidator }
    );
    // check token, to see if password reset is required
      this.auth.idTokenResult
      .pipe(
        // @ts-ignore
        first(),
        map((token) => {
          // @ts-ignore
            return token?.claims?.requirePasswordReset === true;
        })
      )
      .subscribe((requirePasswordReset) => {
        if (requirePasswordReset === true) {
          this.redirectAfterChange = true;
          this.header = 'Password change required';
        } else {
          this.redirectAfterChange = false;
          this.header = 'Change your password';
        }
      });
  }

  changePassword(): void {
    const password = this.changePasswordForm.get('password1')?.value;
    this.changePasswordForm.reset();
    this.loadingService.setOptions({}).show();
    // changing a password destroys the session, so need to reauthenticate afterwards
    this.usersService
      .changePassword(password)
      .pipe(
        // need first otherwise we get the user every time it changes, which it does repeatedly with the next call, resulting in a loop
        switchMap(() => {
          return this.auth.user;
        }),
        first(),
        switchMap((user: User) => {
          return this.auth.signInWithEmailAndPassword(user.email!, password).then(() => {
            return true;
          });
        }),
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe(
        () => {
          this.notificationService.success('Password has been changed', 'Success');
          if (this.redirectAfterChange === true) {
            this.router.navigate(['/console']);
          }
        },
        (error) => {
          this.notificationService.error('Refresh the page to try again', 'Error changing password');
        }
      );
  }
}
