import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { Pipeline } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { finalize, first, map, mergeMap, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { ResetPositionComponent } from '@shared/reset-position/reset-position.component';
import { ConfigService } from '@services/config/config.service';
import { Observable } from 'rxjs';
import { flatMap } from 'lodash';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.scss'],
})
export class PipelinesComponent implements OnInit {
  @ViewChild('resetPositionModal') resetPositionModal: ResetPositionComponent;
  pipelines: Pipeline[] | undefined;
  search: string;
  pipeline: Pipeline;
  claims: any;
  domain: string;

  constructor(
    private fb: FormBuilder,
    public mainService: MainService,
    public mainNavService: MainNavService,
    private titleService: Title,
    private pipelineService: PipelineServiceService,
    private notificationService: NotificationService,
    private loadingService: LoadingGeneralService,
    private auth: AngularFireAuth,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('pipelines');
    this.titleService.setTitle('Pipelines - Swarm IO');
    this.setClaims();
    this.pipelineService.refreshPipelines().subscribe(
      (pipelines) => (this.pipelines = pipelines),
      (error) => this.notificationService.error('Refresh the page to try again', 'Error loading pipelines')
    );
    this.domain = this.configService.config.domain;
  }

  deletePipeline(): void {
    this.loadingService.setOptions({}).show();
    this.pipelineService
      .deletePipeline(this.pipeline.id)
      .pipe(
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe(
        () => {
          this.pipelineService.refreshPipelines().subscribe(
            (pipelines) => {
              this.pipelines = pipelines;
              this.notificationService.success('Pipeline deleted', 'Success!');
            },
            (error) => this.notificationService.error('Refresh the page to try again', 'Error loading pipelines')
          );
        },
        (error) => {
          this.notificationService.error('Please try again', 'Failed to delete pipeline');
        }
      );
  }

  setClaims(): void {
    this.auth.idTokenResult.pipe(first()).subscribe((token) => {
      this.claims = token?.claims;
    });
  }

  getPublishUrl(id: string): string {
    return `https://${this.claims?.accountUuid}.api.${this.domain}/v1/authenticated/publish?id=${id}`;
  }
}
