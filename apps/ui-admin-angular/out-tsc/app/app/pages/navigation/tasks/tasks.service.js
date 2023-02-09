import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
let TasksService = class TasksService {
    constructor() { }
    calcPorc(completed, total) {
        completed = completed / 100;
        total = total / 100;
        return this.roundNumber(100 - (total - completed) * 1000, 2);
    }
    calcColor(completed, total) {
        const porc = this.calcPorc(completed, total);
        if (porc <= 20) {
            return 'danger';
        }
        if (porc <= 40) {
            return 'info';
        }
        if (porc <= 60) {
            return 'primary';
        }
        if (porc <= 80) {
            return 'warning';
        }
        if (porc <= 100) {
            return 'success';
        }
    }
    roundNumber(num, places) {
        return +parseFloat(num).toFixed(places);
    }
};
TasksService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [])
], TasksService);
export { TasksService };
//# sourceMappingURL=tasks.service.js.map