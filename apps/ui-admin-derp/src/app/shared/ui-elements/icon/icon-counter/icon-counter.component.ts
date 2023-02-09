import { Component, OnInit, Input } from '@angular/core';
import { ColorTheme, Colors } from '@services/model';

@Component({
  selector: 'fz-icon-counter',
  templateUrl: './icon-counter.component.html',
  styleUrls: ['./icon-counter.component.scss'],
})
export class IconCounterComponent implements OnInit {
  @Input() counter: string;

  @Input() color: ColorTheme | Colors = 'primary';

  @Input() icon: string;

  @Input() animatedIcon = 'swing';

  @Input() animatedIconInfinite = false;

  @Input() animatedBalloon = 'slideInUp';

  @Input() animatedBalloonInfinite = false;

  @Input() dot = false;

  @Input() size: number;

  constructor() {}

  ngOnInit(): void {}
}
