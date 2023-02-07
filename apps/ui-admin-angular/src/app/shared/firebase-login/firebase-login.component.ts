import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MainService} from "@main/main.service";
import {Title} from "@angular/platform-browser";
import {ModalComponent} from "@shared/ui-elements/modal/modal.component";
import {LoadingGeneralService} from "@main/loading-general/loading-general.service";
import { GoogleAuthProvider } from "firebase/auth";
import {NotificationService} from "@main/notification/notification.service";
import {map} from "rxjs/operators";


@Component({
    selector: 'firebase-login',
    templateUrl: './firebase-login.component.html',
    styleUrls: ['./firebase-login.component.scss']
})
export class FirebaseLoginComponent implements OnInit {
    public loginForm: FormGroup;
    public emailSigninForm: FormGroup;
    @ViewChild('emailSigninModal') emailSigninModal: ModalComponent;
    @ViewChild('emailSigninSuccessModal') emailSigninSuccessModal: ModalComponent;
    @ViewChild('emailSigninErrorModal') emailSigninErrorModal: ModalComponent;
    provider = new GoogleAuthProvider();

    constructor(
        public auth: AngularFireAuth,
        private fb: FormBuilder,
        public mainService: MainService,
        private titleService: Title,
        public loadingService: LoadingGeneralService,
        public notificationService: NotificationService,
    ) {
    }

    ngOnInit(): void {
        this.mainService.templateClear = true;
        this.titleService.setTitle('Swarm IO - Log In');
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
            password: ['', [Validators.required]],
        });
        this.emailSigninForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
        });
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        this.auth.useDeviceLanguage()
    }

    loginWithGooglePopup() {
        console.log('loginWithGooglePopup called')
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
            console.log('logged in with google popup')
            console.log(result)
        }).catch(err => console.log(err))
    }

    loginWithUsernamePassword() {
        console.log('login called')
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        this.auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                // nav to home, let router redirect however we've configured
                console.log('logged in with email and password')
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

    logout() {
        this.auth.signOut();
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

    showEmailSigninModal(): void {
        this.emailSigninModal.show();
    }

    hideEmailSigninModal(): void {
        this.emailSigninModal.hide();
    }

}
