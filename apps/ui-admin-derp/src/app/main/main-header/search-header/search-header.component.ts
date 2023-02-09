import { Component, OnInit } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent implements OnInit {
  focus = false;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}

  search() {}
}
