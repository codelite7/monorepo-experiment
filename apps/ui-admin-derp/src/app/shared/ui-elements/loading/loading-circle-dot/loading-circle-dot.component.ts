import { Component, OnInit, Input, OnChanges, ElementRef } from '@angular/core';
import { Colors, GrayColors, ColorTheme } from '@services/model';

@Component({
  selector: 'fz-loading-circle-dot',
  templateUrl: './loading-circle-dot.component.html',
  styleUrls: ['./loading-circle-dot.component.scss'],
})
export class LoadingCircleDotComponent implements OnInit, OnChanges {
  @Input() size = 30;

  @Input() color1: Colors | GrayColors | ColorTheme = 'success';

  @Input() color2: Colors | GrayColors | ColorTheme = 'warning';

  @Input() color3: Colors | GrayColors | ColorTheme = 'danger';

  @Input() color4: Colors | GrayColors | ColorTheme = 'info';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.init(this.size, this.color1, this.color2, this.color3, this.color4);
  }

  ngOnChanges(changes) {
    const size = changes.size ? changes.size.currentValue : this.size;
    const color1 = changes.color1 ? changes.color1.currentValue : this.color1;
    const color2 = changes.color2 ? changes.color2.currentValue : this.color2;
    const color3 = changes.color3 ? changes.color3.currentValue : this.color3;
    const color4 = changes.color4 ? changes.color4.currentValue : this.color4;

    this.init(size, color1, color2, color3, color4);
  }

  init(size: number, color1: string, color2: string, color3: string, color4: string) {
    this.elementRef.nativeElement.style.setProperty('--size', String(size / 2) + 'px');
    this.elementRef.nativeElement.style.setProperty('--color-1', `var(--${color1})`);
    this.elementRef.nativeElement.style.setProperty('--color-2', `var(--${color2})`);
    this.elementRef.nativeElement.style.setProperty('--color-3', `var(---${color3})`);
    this.elementRef.nativeElement.style.setProperty('--color-4', `var(--${color4})`);
  }
}
