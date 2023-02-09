import { Component, OnInit, Input } from '@angular/core';
import { Colors, ColorTheme } from '@services/model';

@Component({
  selector: 'fz-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() size: 'large' | 'extra-large' | 'default' = 'default';

  @Input() pill = false;

  @Input() color: Colors | ColorTheme;

  @Input() classBadge: string;

  constructor() {}

  ngOnInit(): void {}
}
