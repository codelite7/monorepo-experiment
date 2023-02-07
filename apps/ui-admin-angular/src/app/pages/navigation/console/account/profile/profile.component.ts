import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { finalize, first, switchMap } from 'rxjs/operators';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { AccountsService, Subdomain } from '@services/account/accounts.service';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '@services/config/config.service';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  claims: any;
  subdomain: Subdomain = { id: '', subdomain: '', updatedAt: '', accountUuid: '' };
  subdomainToSet: string = this.subdomain?.subdomain;
  public subdomainForm: FormGroup;
  domain: string;
  subdomainPattern: string = '^([a-zA-Z0-9][a-zA-Z0-9-_]*\\.)*[a-zA-Z0-9]*[a-zA-Z0-9-_]*[[a-zA-Z0-9]+$';
  @ViewChild('setSubdomainModal') setSubdomainModal: ModalComponent;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    public mainNavService: MainNavService,
    private titleService: Title,
    private accountsService: AccountsService,
    public notificationService: NotificationService,
    public loadingService: LoadingGeneralService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.loadingService.setOptions({}).show();
    this.mainNavService.selectedItem('nav-profile');
    this.titleService.setTitle('Profile - Swarm IO');
    this.setClaims();
    this.accountsService
      .getSubdomain()
      .pipe(
        // hide loading
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe(
        (subdomain: Subdomain) => {
          if (subdomain === null) {
            this.subdomain.subdomain = this.claims.accountUuid.toLowerCase();
          } else {
            this.subdomain = subdomain;
          }
          this.initializeSubdomainFormValue(this.subdomain.subdomain);
        },
        (error) =>
          this.notificationService.error('Refresh the page and try again', 'Error getting account api subdomain')
      );
    this.subdomainForm = this.fb.group({
      subdomain: [this.subdomainToSet, [Validators.required, Validators.pattern(this.subdomainPattern)]],
    });
    this.domain = this.configService.config.domain;
  }

  getTierText(): string {
    const plan = this.claims?.plan;
    if (plan) {
      return plan.charAt(0).toUpperCase() + plan.slice(1);
    }
    return 'Unknown';
  }

  getSubscriptionStatusText(): string {
    const status = this.claims?.subscriptionStatus;
    if (status) {
      if (status === 'active') {
        return 'Active';
      } else if (status === 'cancelled') {
        return 'Cancelled';
      }
    }
    return 'Unknown';
  }

  cancelSubscription(): void {
    this.loadingService.setOptions({}).show();
    this.accountsService
      .cancelSubscription()
      .pipe(
        // get user
        switchMap(() => this.auth.user),
        // get claims
        switchMap((user) => {
          return user!.getIdTokenResult(true).then((tokenResult) => tokenResult.claims);
        }),
        // once
        first(),
        // hide loading
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe(
        (claims) => {
          this.claims = claims;
          this.notificationService.success('Subscription cancelled', 'Success');
        },
        (error) => {
          this.notificationService.error('Refresh the page and try again', 'Error cancelling subscription');
        }
      );
  }

  setClaims(): void {
    this.auth.idTokenResult
      .pipe(
        first(),
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe((token) => {
        this.claims = token!.claims;
        if (this.subdomain.subdomain === '') {
          this.subdomain.subdomain = token!.claims.accountUuid.toLowerCase();
          this.initializeSubdomainFormValue(this.subdomain.subdomain);
        }
      });
  }

  get subdomainInput(): AbstractControl<any, any> | null {
    return this.subdomainForm.get('subdomain');
  }

  showSetSubdomainModal(): void {
    this.subdomainToSet = this.subdomain.subdomain;
    this.setSubdomainModal.show();
  }

  setSubdomain(): void {
    this.loadingService.setOptions({}).show();
    this.setSubdomainModal.hide();
    const subdomain = this.subdomainForm.value;
    this.accountsService
      .setSubdomain(subdomain.subdomain)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(
        (result) => {
          this.subdomain.subdomain = subdomain.subdomain;
          this.notificationService.success(
            `Subdomain set, you can now publish messages using your custom subdomain ${subdomain.subdomain}.api.${this.domain}`,
            'Success'
          );
        },
        (error) => {
          if (error.error.includes('already in use')) {
            this.notificationService.error(
              `The subdomain ${subdomain.subdomain} is already in use, please use a different subdomain`,
              'Error setting api subdomain'
            );
          } else {
            this.notificationService.error('Please try again', 'Error setting api subdomain');
          }
        }
      );
  }

  initializeSubdomainFormValue(subdomain: string): void {
    this.subdomainForm.setValue({ subdomain });
  }
}
