import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'fz-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() task;

  @Input() tasks = [];

  @Input() color;

  @Input() idArea;

  @Input() classArea;

  @Output() removeItem = new EventEmitter();

  areaInput = false;

  subtaskInput: string;

  showCompleted = true;

  stateDrop = true;

  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {}

  openInputSubtask() {
    if (this.tasks.length === 0) {
      this.areaInput = this.task ? true : false;
    } else {
      this.areaInput = !this.areaInput;
    }
  }

  add() {
    if (this.subtaskInput) {
      this.tasks.unshift({ completed: false, title: this.subtaskInput });
    }
    this.subtaskInput = '';
  }

  discart(item) {
    this.stateDrop = false;
    this.removeItem.emit(item);
  }

  checkAll() {
    this.stateDrop = false;
    this.tasks.forEach((element) => {
      element.completed = true;
    });
  }

  uncheckAll() {
    this.stateDrop = false;
    this.tasks.forEach((element) => {
      element.completed = false;
    });
  }

  deleteItem(value) {
    this.tasks = this.tasks.filter((x) => x !== value);
  }

  ifFilter(item) {
    if (this.showCompleted) {
      return true;
    }
    return !this.showCompleted && !item.completed;
  }

  get completed() {
    let completed = 0;
    this.tasks.forEach((element) => {
      if (element.completed) {
        completed++;
      }
    });
    return completed;
  }
}
