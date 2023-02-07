import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'fz-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainHeaderComponent implements OnInit {
  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
