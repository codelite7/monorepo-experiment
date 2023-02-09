import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NotificationService } from '@main/notification/notification.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss'],
})
export class Login2Component implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth,
    public mainService: MainService,
    private titleService: Title,
    private router: Router,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.mainService.templateClear = true;
    this.titleService.setTitle('Swarm IO - Log In');
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // nav to home, let router redirect however we've configured
        this.router.navigate(['/']);
      })
      .catch((error) => {
        let errorMessage;
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage = 'This user does not exist';
            break;
          case 'auth/invalid-email':
            errorMessage = 'This email address is invalid';
            break;
          case 'auth/user-disabled':
            errorMessage = 'This account has been disabled';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Password is incorrect';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Too many attempts, please try again later.';
            break;
          default:
            errorMessage = 'Unknown error, please try,  again';
            break;
        }
        this.notificationService.error(errorMessage);
      });
  }
}
