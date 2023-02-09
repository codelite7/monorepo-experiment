import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { TasksService } from './tasks.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MainService } from '@main/main.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  task = [
    {
      id: 'task1',
      title: 'Make budgets',
      color: '',
      subtasks: [
        { completed: false, title: 'the task example' },
        { completed: false, title: 'the task example 2' },
        { completed: false, title: 'the task example 3' },
        { completed: true, title: 'the task example 4' },
        { completed: true, title: 'the task example 5' },
        { completed: false, title: 'the task example 6' },
      ],
    },
    {
      id: 'task2',
      title: 'Shopping list',
      color: '',
      subtasks: [
        { completed: false, title: 'the 2 task example' },
        { completed: true, title: 'the 2 task example 2' },
        { completed: true, title: 'the 2 task example 3' },
        { completed: true, title: 'the 2 task example 4' },
        { completed: true, title: 'the 2 task example 5' },
        { completed: false, title: 'the 2 task example 6' },
      ],
    },
    {
      id: 'task3',
      title: 'New year planning',
      color: '',
      subtasks: [
        { completed: false, title: 'the 3 task example' },
        { completed: true, title: 'the 3 task example 2' },
        { completed: true, title: 'the 3 task example 3' },
        { completed: true, title: 'the 3 task example 4' },
        { completed: true, title: 'the 3 task example 5' },
        { completed: false, title: 'the 3 task example 6' },
      ],
    },
    {
      id: 'task4',
      title: 'Make budgets',
      color: 'info',
      subtasks: [
        { completed: false, title: 'the task example' },
        { completed: false, title: 'the task example 2' },
        { completed: false, title: 'the task example 3' },
        { completed: true, title: 'the task example 4' },
        { completed: true, title: 'the task example 5' },
        { completed: false, title: 'the task example 6' },
      ],
    },
    {
      id: 'task5',
      title: 'Shopping list',
      color: 'teal',
      subtasks: [
        { completed: false, title: 'the 2 task example' },
        { completed: true, title: 'the 2 task example 2' },
        { completed: true, title: 'the 2 task example 3' },
        { completed: true, title: 'the 2 task example 4' },
        { completed: true, title: 'the 2 task example 5' },
        { completed: false, title: 'the 2 task example 6' },
      ],
    },
    {
      id: 'task6',
      title: 'New year planning',
      color: 'warning',
      subtasks: [
        { completed: false, title: 'the 3 task example' },
        { completed: true, title: 'the 3 task example 2' },
        { completed: true, title: 'the 3 task example 3' },
        { completed: true, title: 'the 3 task example 4' },
        { completed: true, title: 'the 3 task example 5' },
        { completed: false, title: 'the 3 task example 6' },
      ],
    },
  ];

  constructor(
    public mainService: MainService,
    public mainNavService: MainNavService,
    public tasksService: TasksService,
    public activeRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('extra-pages', 'nav-tasks');
    this.titleService.setTitle('Tasks - Swarm IO');

    if (this.activeRoute.snapshot.queryParams?.new) {
      this.newTask();
    }

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && this.activeRoute.snapshot.queryParams?.new) {
        this.newTask();
      }
    });
  }

  newTask() {
    this.task.unshift({ id: 'newTask', title: '', color: '', subtasks: [] });
  }

  removeTask(item) {
    this.task = this.task.filter((x) => x.subtasks !== item);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task, event.previousIndex, event.currentIndex);
  }
}
