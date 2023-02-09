import { Component, OnInit } from '@angular/core';
import { get } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-actions',
  templateUrl: './account-actions.component.html',
  styleUrls: ['./account-actions.component.scss'],
})
export class AccountActionsComponent implements OnInit {
  mode: string;
  oobCode: string;
  apiKey: string;
  continueUrl: string;
  valid: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public auth: AngularFireAuth,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.mode = get(params, 'mode', null);
      this.oobCode = get(params, 'oobCode', null);
      this.apiKey = get(params, 'apiKey', null);
      this.continueUrl = get(params, 'continueUrl', null);
      this.valid = Boolean(
        (this.mode === 'resetPassword' || this.mode === 'verifyEmail' || this.mode === 'signIn') &&
          this.oobCode &&
          this.apiKey
      );
      if (this.valid) {
        // if the link is valid, redirect to the proper action
        this.router.navigate([`${this.mode.toLowerCase()}`], {
          queryParams: {
            mode: this.mode,
            oobCode: this.oobCode,
            apiKey: this.apiKey,
          },
          relativeTo: this.activatedRoute,
        });
      } else {
        // link is invalid, redirect to invalid link
        this.router.navigate(['error/invalid-link']);
      }
    });
  }
}
