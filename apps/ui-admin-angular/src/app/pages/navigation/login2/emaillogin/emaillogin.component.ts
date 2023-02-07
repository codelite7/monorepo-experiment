import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';

@Component({
  selector: 'app-emaillogin',
  templateUrl: './emaillogin.component.html',
  styleUrls: ['./emaillogin.component.scss'],
})
export class EmailloginComponent implements OnInit {
  public emailSigninForm: FormGroup;
  @ViewChild('emailSigninModal') emailSigninModal: ModalComponent;
  @ViewChild('emailSigninSuccessModal') emailSigninSuccessModal: ModalComponent;
  @ViewChild('emailSigninErrorModal') emailSigninErrorModal: ModalComponent;

  constructor(public auth: AngularFireAuth, private fb: FormBuilder, public loadingService: LoadingGeneralService) {}

  ngOnInit(): void {
    this.emailSigninForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
    });
  }

  sendSigninEmail() {
    this.loadingService.setOptions({}).show();
    const email = this.emailSigninForm.get('email')?.value;
    const actionCodeSettings = {
      url: `${window.location}`,
      // handleCodeInApp must be true when sending email signin links
      handleCodeInApp: true,
    };
    this.auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then((result) => {
        this.emailSigninModal.hide();
        this.emailSigninSuccessModal.show();
      })
      .catch((error) => {
        this.emailSigninErrorModal.show();
      })
      .finally(() => {
        this.loadingService.hide();
      });
  }

  get email() {
    return this.emailSigninForm.get('email');
  }

  show(): void {
    this.emailSigninModal.show();
  }

  hide(): void {
    this.emailSigninModal.hide();
  }
}
