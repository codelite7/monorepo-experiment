import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TasksService } from 'src/app/pages/navigation/tasks/tasks.service';
let DropdownTasksComponent = class DropdownTasksComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.state = true;
        this.tasks = [
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
    }
    ngOnInit() { }
};
DropdownTasksComponent = __decorate([
    Component({
        selector: 'fz-dropdown-tasks',
        templateUrl: './dropdown-tasks.component.html',
        styleUrls: ['./dropdown-tasks.component.scss'],
    }),
    __metadata("design:paramtypes", [TasksService])
], DropdownTasksComponent);
export { DropdownTasksComponent };
//# sourceMappingURL=dropdown-tasks.component.js.map