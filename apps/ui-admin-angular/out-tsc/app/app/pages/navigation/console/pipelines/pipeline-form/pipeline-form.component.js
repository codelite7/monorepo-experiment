import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { NotificationService } from '@main/notification/notification.service';
import { OutputsService } from '@services/shared/outputs/outputs.service';
import { pipelineFromFormPipeline } from '../pipeline';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
let PipelineFormComponent = class PipelineFormComponent {
    constructor(fb, location, pipelineService, notificationService, outputsService) {
        this.fb = fb;
        this.location = location;
        this.pipelineService = pipelineService;
        this.notificationService = notificationService;
        this.outputsService = outputsService;
        this.state = true;
        this.itemPluralMapping = {
            filter: {
                '=0': 'No filters',
                '=1': '1 filter',
                other: '# filters',
            },
        };
    }
    get name() {
        return this.pipelineForm.get('name');
    }
    get retryIntervalSeconds() {
        return this.pipelineForm.get('retryIntervalSeconds');
    }
    get maxRetries() {
        return this.pipelineForm.get('maxRetries');
    }
    get steps() {
        return this.pipelineForm.get('steps');
    }
    ngOnInit() {
        this.pipelineForm = this.fb.group({
            id: [this.pipeline.id],
            name: [this.pipeline.name, Validators.required],
            steps: this.fb.array(this.initSteps()),
            outputs: [this.pipeline.outputs],
            retryIntervalSeconds: [this.pipeline.retryIntervalSeconds, [Validators.required, Validators.min(0)]],
            maxRetries: [this.pipeline.maxRetries, [Validators.required, Validators.min(-1)]],
        });
        this.outputsService.getOutputs(this.pipeline.id).subscribe((outputs) => (this.outputs = outputs), (error) => this.notificationService.error('Error loading pipelines, please refresh the page to try again', 'Error'));
    }
    initSteps() {
        const stepsArray = [];
        for (const step of this.pipeline.steps) {
            stepsArray.push(this.initFilterStep(step));
        }
        return stepsArray;
    }
    addFilterStep() {
        const control = this.pipelineForm.get('steps');
        control.push(this.initFilterStep(null));
    }
    initFilterStep(step) {
        return this.fb.group({
            statements: this.fb.array(this.initStatements(step), Validators.required),
            expression: [(step === null || step === void 0 ? void 0 : step.expression) ? step.expression : '', Validators.required],
            outputs: [(step === null || step === void 0 ? void 0 : step.outputs) ? step.outputs : []],
            required: [(step === null || step === void 0 ? void 0 : step.required) ? step.required : false, Validators.required],
            type: 'filter',
        });
    }
    initStatements(step) {
        const statementsArray = [];
        if (step) {
            for (const statement of step.statements) {
                const statementGroup = this.initStatement(statement);
                statementsArray.push(statementGroup);
            }
        }
        return statementsArray;
    }
    addStatement(i) {
        const control = this.pipelineForm.get('steps');
        const step = control.get([i]);
        const stepControl = step.get('statements');
        stepControl.push(this.initStatement(null));
        stepControl.markAsDirty();
        stepControl.markAsTouched();
    }
    initStatement(statement) {
        return this.fb.group({
            name: [(statement === null || statement === void 0 ? void 0 : statement.name) ? statement.name : '', Validators.required],
            field: [(statement === null || statement === void 0 ? void 0 : statement.field) ? statement.field : '', Validators.required],
            operator: [(statement === null || statement === void 0 ? void 0 : statement.operator) ? statement.operator : '>', Validators.required],
            value: [(statement === null || statement === void 0 ? void 0 : statement.value) ? statement.value : '', Validators.required],
            valueType: [(statement === null || statement === void 0 ? void 0 : statement.valueType) ? statement.valueType : 'string', Validators.required],
        });
    }
    removeStatement(i, j) {
        const control = this.pipelineForm.get('steps');
        const step = control.get([i]);
        const stepControl = step.get('statements');
        stepControl.removeAt(j);
    }
    submit() {
        const pipeline = pipelineFromFormPipeline(this.pipelineForm.value);
        if (!this.edit) {
            this.create(pipeline);
        }
        else {
            this.update(pipeline);
        }
    }
    create(pipeline) {
        this.pipelineService.createPipeline(pipeline).subscribe(() => this.location.back(), (error) => this.notificationService.error('Please try again', 'Error creating pipeline'));
    }
    update(pipeline) {
        this.pipelineService.updatePipeline(pipeline).subscribe(() => this.location.back(), (error) => this.notificationService.error('Please try again', 'Error updating pipeline'));
    }
    removeStep(stepIndex) {
        const control = this.pipelineForm.get('steps');
        control.removeAt(stepIndex);
    }
    moveStepUp(stepIndex) {
        const control = this.pipelineForm.get('steps');
        const step = control.get([stepIndex]);
        control.removeAt(stepIndex);
        control.insert(stepIndex - 1, step);
    }
    moveStepDown(stepIndex) {
        const control = this.pipelineForm.get('steps');
        const step = control.get([stepIndex]);
        control.removeAt(stepIndex);
        control.insert(stepIndex + 1, step);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PipelineFormComponent.prototype, "edit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PipelineFormComponent.prototype, "pipeline", void 0);
PipelineFormComponent = __decorate([
    Component({
        selector: 'app-pipeline-form',
        templateUrl: './pipeline-form.component.html',
        styleUrls: ['./pipeline-form.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Location,
        PipelineServiceService,
        NotificationService,
        OutputsService])
], PipelineFormComponent);
export { PipelineFormComponent };
//# sourceMappingURL=pipeline-form.component.js.map