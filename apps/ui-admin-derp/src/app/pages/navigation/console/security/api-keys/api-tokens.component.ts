import { Component, OnInit, ViewChild } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { ApitokensService } from '@services/security/apitokens.service';
import { NotificationService } from '@main/notification/notification.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { finalize, map } from 'rxjs/operators';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
import * as api from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

@Component({
  selector: 'app-api-tokens',
  templateUrl: './api-tokens.component.html',
  styleUrls: ['./api-tokens.component.scss'],
})
export class ApiTokensComponent implements OnInit {
  public apiTokenForm: FormGroup;
  apitokens: api.ApiToken[] | undefined;
  apitokenToDelete: api.ApiToken | undefined = { name: '', token: '' };
  apitokenToCreate: api.ApiToken | undefined = { name: '', token: '' };
  @ViewChild('createApiTokenModal') createApiTokenModal: ModalComponent;

  constructor(
    private fb: FormBuilder,
    public mainNavService: MainNavService,
    private titleService: Title,
    private apitokensService: ApitokensService,
    private notificationService: NotificationService,
    private loadingService: LoadingGeneralService
  ) {}

  ngOnInit(): void {
    this.apiTokenForm = this.fb.group({
      name: [this.apitokenToCreate?.name, Validators.required],
    });
    this.mainNavService.selectedItem('webhooks');
    this.titleService.setTitle('API Tokens - Swarm IO');
    this.refreshApiTokens();
  }

  refreshApiTokens(): void {
    this.apitokensService.getApitokens().subscribe(
      (apitokens) => (this.apitokens = apitokens),
      (error) => this.notificationService.error('Refresh the page to try again', 'Error loading api tokens')
    );
  }

  createApitoken(): void {
    this.loadingService.setOptions({}).show();
    this.createApiTokenModal.hide();
    const apiToken = this.apiTokenForm.value;
    this.apitokensService
      .createApitoken(apiToken.name)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(
        () => {
          this.refreshApiTokens();
          this.notificationService.success(`API Token created`, 'Success');
        },
        (error) => {
          if (error.error === 'an api token with this name already exists') {
            this.notificationService.error(
              `An api token named ${apiToken.name} already exists, please use a different name`,
              'Error creating api token'
            );
          } else {
            this.notificationService.error('Please try again', 'Error creating api token');
          }
        }
      );
  }

  deleteApitoken(): void {
    this.loadingService.setOptions({}).show();
    const tokenToDelete = this.apitokenToDelete;
    if (tokenToDelete) {
      this.apitokensService
        .deleteApitoken(tokenToDelete.name)
        .pipe(
          finalize(() => {
            this.loadingService.hide();
            this.apitokenToDelete = { name: '', token: '' };
          })
        )
        .subscribe(
          (result) => {
            this.refreshApiTokens();
            this.notificationService.success(`API Token deleted`, 'Success');
          },
          (error) => {
            this.notificationService.error('Please try again', 'Error deleting api token');
          }
        );
    }
  }

  get name(): AbstractControl<any, any> | null {
    return this.apiTokenForm.get('name');
  }
}

export type ListApiTokensQuery = {
  apiTokens: api.ListApiTokensResponse;
};
