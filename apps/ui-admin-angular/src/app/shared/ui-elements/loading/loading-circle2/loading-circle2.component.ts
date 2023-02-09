import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Colors, GrayColors, ColorTheme } from '@services/model';

@Component({
  selector: 'fz-loading-circle2',
  templateUrl: './loading-circle2.component.html',
  styleUrls: ['./loading-circle2.component.scss'],
})
export class LoadingCircle2Component implements OnInit {
  @Input() size = 40;

  @Input() color: Colors | GrayColors | ColorTheme = 'primary';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.init(this.color);
  }

  ngOnChanges(changes) {
    const color = changes.color ? changes.color.currentValue : this.color;
    this.init(color);
  }

  init(color: string) {
    this.elementRef.nativeElement.style.setProperty('--color-loading-circle', `var(--${color})`);
  }
}
