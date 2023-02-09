import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { formPipelineFromPipeline } from '../pipeline';
import { ActivatedRoute } from '@angular/router';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
let EditPipelineComponent = class EditPipelineComponent {
    constructor(activatedRoute, pipelineService, mainNavService, titleService) {
        this.activatedRoute = activatedRoute;
        this.pipelineService = pipelineService;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('pipelines');
        this.titleService.setTitle('Edit Pipeline - Swarm IO');
        this.activatedRoute.params.subscribe((params) => {
            this.id = params.id;
            this.pipelineService.getPipeline(this.id).subscribe((pipeline) => {
                const formPipeline = formPipelineFromPipeline(pipeline);
                this.pipeline = formPipeline;
            }, (error) => (this.error = true));
        }, (error) => (this.error = true));
    }
};
EditPipelineComponent = __decorate([
    Component({
        selector: 'app-edit-pipeline',
        templateUrl: './edit-pipeline.component.html',
        styleUrls: ['./edit-pipeline.component.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        PipelineServiceService,
        MainNavService,
        Title])
], EditPipelineComponent);
export { EditPipelineComponent };
//# sourceMappingURL=edit-pipeline.component.js.map