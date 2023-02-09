import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  array = [{ title: 'Test' }, { title: 'Ok' }, { title: 'Upload' }, { title: 'Cancel' }];

  search = '';

  example = `array = [
    { title: 'Test' },
    { title: 'Ok' },
    { title: 'Upload' },
    { title: 'Cancel' },
];

search = '';`;

  example1 = `<input type="text" placeholder="Search..." name="search" [(ngModel)]="search" class="form-control">

<p *ngFor="let item of array | fzFilter: search;">{{ item }}</p>`;

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-pipes-filter');
  }
}
