import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/pages/navigation/tasks/tasks.service';

@Component({
  selector: 'fz-dropdown-tasks',
  templateUrl: './dropdown-tasks.component.html',
  styleUrls: ['./dropdown-tasks.component.scss'],
})
export class DropdownTasksComponent implements OnInit {
  state = true;

  tasks = [
    {
      subtasks: 10,
      completed: 2,
      title: 'Complete the task',
      expiryDate: '',
      delayedTask: false,
    },
    {
      subtasks: 12,
      completed: 6,
      title: 'Complete the task 2',
      expiryDate: '15/04/2020',
      delayedTask: false,
    },
    {
      subtasks: 8,
      completed: 5,
      title: 'Complete the task 3',
      expiryDate: '12/01/2020',
      delayedTask: true,
    },
    {
      subtasks: 30,
      completed: 29,
      title: 'Complete the task 4',
      expiryDate: '',
      delayedTask: false,
    },
  ];

  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {}
}
