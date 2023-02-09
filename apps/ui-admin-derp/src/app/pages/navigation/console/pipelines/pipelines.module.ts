import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelinesComponent } from './pipelines.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePipelineComponent } from './create-pipeline/create-pipeline.component';
import { EditPipelineComponent } from './edit-pipeline/edit-pipeline.component';
import { PipelineFormComponent } from './pipeline-form/pipeline-form.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ClipboardModule } from 'ngx-clipboard';

const routes: Routes = [
  { path: '', component: PipelinesComponent },
  { path: 'create', component: CreatePipelineComponent },
  { path: ':id', component: EditPipelineComponent },
];

@NgModule({
  declarations: [PipelinesComponent, CreatePipelineComponent, EditPipelineComponent, PipelineFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    ClipboardModule,
  ],
})
export class PipelinesModule {}
