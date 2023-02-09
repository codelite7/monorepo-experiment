import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListGroupComponent implements OnInit {
  @Input() flush = false;

  @Input() horizontal: 'default' | 'sm' | 'md' | 'lg' | 'xl';

  constructor(public mainService: MainService) {}

  ngOnInit(): void {}

  get classHorizontal() {
    if (this.horizontal) {
      return this.horizontal === 'default' ? `list-group-horizontal` : `list-group-horizontal-${this.horizontal}`;
    }
    return '';
  }
}
