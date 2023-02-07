import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [{ path: '', component: TasksComponent }];

@NgModule({
  declarations: [TasksComponent, TaskListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class TasksModule {}
