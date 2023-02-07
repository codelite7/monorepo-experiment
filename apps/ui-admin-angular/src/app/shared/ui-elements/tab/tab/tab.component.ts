import { Component, OnInit, Input } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'fz-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() active: boolean;

  @Input() label: string;

  @Input() animate = 'fadeIn';

  @Input() disabled = false;

  constructor(tabs: TabGroupComponent) {
    tabs.pushTab(this);
  }

  ngOnInit() {}
}
