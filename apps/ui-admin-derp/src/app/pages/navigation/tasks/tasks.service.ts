import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

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
}
