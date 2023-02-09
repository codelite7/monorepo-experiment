import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fz-main-nav-group',
  templateUrl: './main-nav-group.component.html',
  styleUrls: ['./main-nav-group.component.scss'],
})
export class MainNavGroupComponent implements OnInit {
  @Input() classGroup: string;

  constructor() {}

  ngOnInit(): void {}
}
