import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-panel-table',
  templateUrl: './panel-table.component.html',
  styleUrls: ['./panel-table.component.scss'],
})
export class PanelTableComponent implements OnInit {
  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
}
