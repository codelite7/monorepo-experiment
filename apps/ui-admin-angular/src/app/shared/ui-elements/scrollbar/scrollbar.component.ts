import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
})
export class ScrollbarComponent implements OnInit {
  @Input() classScrollbar: string;

  @Input() idScrollbar: string;

  @Input() stateMouseenter = true;

  scrollbar = false;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {
    if (!this.stateMouseenter) {
      this.scrollbar = true;
    }
  }

  mouseEnter() {
    if (this.stateMouseenter) {
      this.scrollbar = true;
    }
  }

  mouseLeave() {
    if (this.stateMouseenter) {
      this.scrollbar = false;
    } else {
      this.scrollbar = true;
    }
  }
}
