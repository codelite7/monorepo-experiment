import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
let CreatePipelineComponent = class CreatePipelineComponent {
    constructor(mainNavService, titleService) {
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.pipeline = {
            id: '',
            name: '',
            steps: [],
            retryIntervalSeconds: 60,
            maxRetries: -1,
            outputs: [],
        };
    }
    ngOnInit() {
        this.mainNavService.selectedItem('pipelines');
        this.titleService.setTitle('Create Pipeline - Swarm IO');
    }
};
CreatePipelineComponent = __decorate([
    Component({
        selector: 'app-create-pipeline',
        templateUrl: './create-pipeline.component.html',
        styleUrls: ['./create-pipeline.component.scss'],
    }),
    __metadata("design:paramtypes", [MainNavService, Title])
], CreatePipelineComponent);
export { CreatePipelineComponent };
//# sourceMappingURL=create-pipeline.component.js.map