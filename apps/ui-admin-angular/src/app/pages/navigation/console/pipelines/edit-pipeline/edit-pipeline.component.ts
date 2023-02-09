import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { Pipeline } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

@Component({
  selector: 'app-edit-pipeline',
  templateUrl: './edit-pipeline.component.html',
  styleUrls: ['./edit-pipeline.component.scss'],
})
export class EditPipelineComponent implements OnInit {
  id: string;
  pipeline: Pipeline | undefined;
  error: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pipelineService: PipelineServiceService,
    public mainNavService: MainNavService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('pipelines');
    this.titleService.setTitle('Edit Pipeline - Swarm IO');
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params.id;
        this.pipelineService.getPipeline(this.id).subscribe(
          (pipeline) => {
            this.pipeline = pipeline;
          },
          (error) => (this.error = true)
        );
      },
      (error) => (this.error = true)
    );
  }
}
