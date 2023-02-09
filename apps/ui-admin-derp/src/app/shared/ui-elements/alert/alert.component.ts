import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Colors, ColorTheme } from '@services/model';

@Component({
  selector: 'fz-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit {
  show = true;

  @Input() color: Colors | ColorTheme = 'primary';

  @Input() buttonClose = false;

  @Input() timeClose: number;

  constructor() {}

  ngOnInit(): void {
    this.closeAlertTime();
  }

  ngOnChanges(changes): void {
    this.closeAlertTime();
  }

  closeAlertTime() {
    if (this.timeClose) {
      setTimeout(() => (this.show = false), this.timeClose);
    }
  }
}
