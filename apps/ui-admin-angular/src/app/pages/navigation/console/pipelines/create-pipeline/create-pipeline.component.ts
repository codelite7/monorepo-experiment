import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { Pipeline } from '../pipeline';

@Component({
  selector: 'app-create-pipeline',
  templateUrl: './create-pipeline.component.html',
  styleUrls: ['./create-pipeline.component.scss'],
})
export class CreatePipelineComponent implements OnInit {
  pipeline: Pipeline = {
    id: '',
    name: '',
    steps: [],
    retry_interval: 60,
    max_retries: -1,
    outputs: [],
  };

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('pipelines');
    this.titleService.setTitle('Create Pipeline - Swarm IO');
  }
}
