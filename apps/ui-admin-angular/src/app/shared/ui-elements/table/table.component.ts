import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @Input() striped = true;

  @Input() bordered = false;

  @Input() borderless = true;

  @Input() dark: boolean;

  @Input() hover = true;

  @Input() small = false;

  @Input() responsive = true;

  @Input() shadow = false;

  @Input() theadDark = false;

  @Input() theadLight = false;

  constructor(public mainService: MainService) {}

  ngOnInit() {}

  get cDark() {
    if (this.dark === true || this.dark === false) {
      return this.dark;
    }
    return this.mainService.getDarkTheme() ? true : false;
  }
}
