import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgressComponent implements OnInit {
  @Input() height: number;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
