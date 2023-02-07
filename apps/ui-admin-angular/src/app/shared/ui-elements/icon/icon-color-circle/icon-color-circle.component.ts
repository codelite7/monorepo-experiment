import { Component, OnInit, Input } from '@angular/core';
import { Colors, ColorTheme } from '@services/model';

@Component({
  selector: 'fz-icon-color-circle',
  templateUrl: './icon-color-circle.component.html',
  styleUrls: ['./icon-color-circle.component.scss'],
})
export class IconColorCircleComponent implements OnInit {
  @Input() icon: string;

  @Input() color: Colors | ColorTheme;

  @Input() size = 30;

  constructor() {}

  ngOnInit(): void {}
}
