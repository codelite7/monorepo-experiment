import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
import { get } from 'lodash';
import { Title } from '@angular/platform-browser';
import { MainService } from '@main/main.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { NotificationService } from '@main/notification/notification.service';

@Component({
  selector: 'app-emailsignin',
  templateUrl: './emailsignin.component.html',
  styleUrls: ['./emailsignin.component.scss'],
})
export class EmailsigninComponent implements OnInit {
  // modal component
  @ViewChild('emailSigninModal') emailSigninModal: ModalComponent;
  // vars
  mode: string;
  oobCode: string;
  oobValid: boolean;
  apiKey: string;
  continueUrl: string;
  isEmailSignInLink: boolean;
  public emailSigninForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public auth: AngularFireAuth,
    private fb: FormBuilder,
    private titleService: Title,
    public mainService: MainService,
    public loadingService: LoadingGeneralService,
    public notificationService: NotificationService
  ) {}

  get email() {
    return this.emailSigninForm.get('email');
  }

  ngOnInit(): void {
    this.loadingService.setOptions({}).show();
    this.titleService.setTitle('Email Sign In - Swarm IO');
    this.activatedRoute.queryParams.subscribe((params) => {
      this.mode = get(params, 'mode', null);
      this.oobCode = get(params, 'oobCode', null);
      this.apiKey = get(params, 'apiKey', null);
      this.continueUrl = get(params, 'continueUrl', null);
      this.auth
        .checkActionCode(this.oobCode)
        .then(() => {
          this.oobValid = true;
          this.mainService.templateClear = true;
        })
        .catch(() => {
          this.oobValid = false;
        });
    });
    this.emailSigninForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
    });
  }

  ngAfterViewInit() {
    this.auth
      .isSignInWithEmailLink(window.location.href)
      .then((result) => {
        if (result === true) {
          this.isEmailSignInLink = true;
          // this.emailSigninModal.show();
        } else {
          this.router.navigate(['error/invalid-link']);
        }
      })
      .catch((error) => {
        this.router.navigate(['error/invalid-link']);
      })
      .finally(() => {
        this.loadingService.hide();
      });
  }

  signinWithEmail() {
    this.loadingService.setOptions({}).show();
    const email = this.emailSigninForm.get('email')?.value;
    this.auth
      .signInWithEmailLink(email, window.location.href)
      .then((result) => {
        this.router.navigate(['/console']);
      })
      .catch((error) => {
        this.notificationService.error(
          'Ensure you entered the same email addres at which you received the login link',
          'Error logging in'
        );
      })
      .finally(() => {
        this.loadingService.hide();
      });
  }
}
