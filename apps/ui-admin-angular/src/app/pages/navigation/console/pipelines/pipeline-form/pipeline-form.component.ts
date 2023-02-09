import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { NotificationService } from '@main/notification/notification.service';
import { OutputsService } from '@services/shared/outputs/outputs.service';
import { Output } from '@services/shared/outputs/outputs';
import { Pipeline, PipelineStep, PipelineStepType } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { FilterStep, TransformStep } from '../pipeline';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pipeline-form',
  templateUrl: './pipeline-form.component.html',
  styleUrls: ['./pipeline-form.component.scss'],
})
export class PipelineFormComponent implements OnInit {
  aceOptions: Map<string, any> = new Map<string, any>([
    ['fontSize', '14px'],
    ['enableBasicAutocompletion', true],
  ]);
  // these aren't picking up the default snippets for some reason
  editorOptions = {
    // enableBasicAutocompletion: true,
    // enableLiveAutocompletion: true
  };
  defaultTransformFunction = `/**
* Example function body. The message variable will be passed in as an object, the function body should return an object.
* This function will run for each message this pipeline handles, modifying the message however your function defines.
*/

message.sum = message.myFirstField + message.mySecondField;
return message;`;

  defaultFilterFunction = `/**
* Example function body. The message variable will be passed in as an object, the function body should return a boolean indicating whether the message passes the filter or not.
* This function will run for each message this pipeline handles, returning true passes the filter, returning false fails the filter.
*/
 
return message.myField >= 100;`;
  public pipelineForm: FormGroup;
  outputs: Output[];
  state = true;
  @Input() edit: boolean;
  @Input() pipeline: Pipeline;
  itemPluralMapping = {
    step: {
      '=0': 'No steps',
      '=1': '1 step',
      other: '# steps',
    },
  };

  constructor(
    private fb: FormBuilder,
    public location: Location,
    private pipelineService: PipelineServiceService,
    public notificationService: NotificationService,
    private outputsService: OutputsService,
    private loadingService: LoadingGeneralService
  ) {}

  get name(): AbstractControl<any, any> | null {
    return this.pipelineForm.get('name');
  }

  get retry_interval(): AbstractControl<any, any> | null {
    return this.pipelineForm.get('retry_interval');
  }

  get max_retries(): AbstractControl<any, any> | null {
    return this.pipelineForm.get('max_retries');
  }

  get steps(): AbstractControl<any, any> | null {
    return this.pipelineForm.get('steps');
  }

  ngOnInit(): void {
    this.pipelineForm = this.fb.group({
      id: [this.pipeline.id],
      name: [this.pipeline.name, Validators.required],
      steps: this.fb.array(this.initSteps()),
      outputs: [this.pipeline.outputs],
      retry_interval: [this.pipeline.retry_interval, [Validators.required, Validators.min(0)]],
      max_retries: [this.pipeline.max_retries, [Validators.required, Validators.min(-1)]],
    });
    this.outputsService.getOutputs(this.pipeline.id).subscribe(
      (outputs) => (this.outputs = outputs),
      (error) =>
        this.notificationService.error('Error loading pipelines, please refresh the page to try again', 'Error')
    );
  }

  initSteps(): FormGroup[] {
    const stepsArray: FormGroup[] = [];
    for (const step of this.pipeline.steps) {
      stepsArray.push(this.initStep(step));
    }
    return stepsArray;
  }

  addTransformStep(): void {
    const control = this.pipelineForm.get('steps') as FormArray;
    control.push(this.initTransformStep(null));
  }

  addFilterStep(): void {
    const control = this.pipelineForm.get('steps') as FormArray;
    control.push(this.initFilterStep(null));
  }

  initStep(step: PipelineStep): FormGroup {
    return step.type === PipelineStepType.PIPELINE_STEP_TYPE_TRANSFORM
      ? this.initTransformStep(step)
      : this.initFilterStep(step);
  }

  initTransformStep(step: PipelineStep | null): FormGroup {
    // default to transform step
    return this.fb.group({
      function: [step?.function ? step.function : this.defaultTransformFunction, Validators.required],
      outputs: [step?.outputs ? step.outputs : []],
      required: [step?.required ? step.required : false, Validators.required],
      type: [step?.type ? step.type : 'transform', Validators.required],
    });
  }

  initFilterStep(step: PipelineStep | null): FormGroup {
    // default to transform step
    return this.fb.group({
      function: [step?.function ? step.function : this.defaultFilterFunction, Validators.required],
      outputs: [step?.outputs ? step.outputs : []],
      required: [step?.required ? step.required : false, Validators.required],
      type: [step?.type ? step.type : 'filter', Validators.required],
    });
  }

  submit() {
    const pipeline = this.pipelineForm.value;
    if (!this.edit) {
      this.create(pipeline);
    } else {
      this.update(pipeline);
    }
  }

  create(pipeline: Pipeline): void {
    this.loadingService.setOptions({}).show();
    this.pipelineService
      .createPipeline(pipeline)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(
        () => this.location.back(),
        (error) => {
          if (error.error === 'a pipeline with this name already exists') {
            this.notificationService.error(
              'A pipeline with this name already exists, there cannot be two pipelines with the same name.',
              'Error creating pipeline'
            );
          } else {
            this.notificationService.error('Please try again', 'Error creating pipeline');
          }
        }
      );
  }

  update(pipeline: Pipeline): void {
    this.loadingService.setOptions({}).show();
    this.pipelineService
      .updatePipeline(pipeline.id, pipeline)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(
        () => this.location.back(),
        (error) => {
          if (error.error === 'a pipeline with this name already exists') {
            this.notificationService.error(
              'A pipeline with this name already exists, there cannot be two pipelines with the same name.',
              'Error updating pipeline'
            );
          } else {
            this.notificationService.error('Please try again', 'Error updating pipeline');
          }
        }
      );
  }

  removeStep(stepIndex: number): void {
    const control = this.pipelineForm.get('steps') as FormArray;
    control.removeAt(stepIndex);
  }

  moveStepUp(stepIndex: number): void {
    const control = this.pipelineForm.get('steps') as FormArray;
    const step = control.get([stepIndex]);
    control.removeAt(stepIndex);
    control.insert(stepIndex - 1, step);
  }

  moveStepDown(stepIndex: number): void {
    const control = this.pipelineForm.get('steps') as FormArray;
    const step = control.get([stepIndex]);
    control.removeAt(stepIndex);
    control.insert(stepIndex + 1, step);
  }
}
