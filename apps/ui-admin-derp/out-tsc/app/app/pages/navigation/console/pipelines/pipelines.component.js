import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../../../../environments/environment';
import { FormBuilder } from '@angular/forms';
import { ResetPositionComponent } from '@shared/reset-position/reset-position.component';
const domain = `${environment.domain}`;
let PipelinesComponent = class PipelinesComponent {
    constructor(fb, mainService, mainNavService, titleService, pipelineService, notificationService, loadingService, auth) {
        this.fb = fb;
        this.mainService = mainService;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.pipelineService = pipelineService;
        this.notificationService = notificationService;
        this.loadingService = loadingService;
        this.auth = auth;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('pipelines');
        this.titleService.setTitle('Pipelines - Swarm IO');
        this.setClaims();
        this.pipelineService.getPipelines().subscribe((pipelines) => (this.pipelines = pipelines), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading pipelines'));
    }
    deletePipeline() {
        this.loadingService.setOptions({}).show();
        this.pipelineService
            .deletePipeline(this.pipeline.id)
            .pipe(first())
            .subscribe(() => {
            this.notificationService.success('Pipeline deleted', 'Success!');
            this.pipelineService
                .getPipelines()
                .pipe(first())
                .subscribe((pipelines) => (this.pipelines = pipelines), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading pipelines'), () => this.loadingService.hide());
        }, (error) => {
            this.notificationService.error('Please try again', 'Failed to delete pipeline');
            this.loadingService.hide();
        });
    }
    setClaims() {
        this.auth.idTokenResult.pipe(first()).subscribe((token) => {
            this.claims = token.claims;
        });
    }
    getPublishUrl(id) {
        var _a;
        return `https://${(_a = this.claims) === null || _a === void 0 ? void 0 : _a.accountUuid}.api.${domain}/v1/authenticated/publish?pipelineId=${id}`;
    }
};
__decorate([
    ViewChild('resetPositionModal'),
    __metadata("design:type", ResetPositionComponent)
], PipelinesComponent.prototype, "resetPositionModal", void 0);
PipelinesComponent = __decorate([
    Component({
        selector: 'app-pipelines',
        templateUrl: './pipelines.component.html',
        styleUrls: ['./pipelines.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        MainService,
        MainNavService,
        Title,
        PipelineServiceService,
        NotificationService,
        LoadingGeneralService,
        AngularFireAuth])
], PipelinesComponent);
export { PipelinesComponent };
//# sourceMappingURL=pipelines.component.js.map