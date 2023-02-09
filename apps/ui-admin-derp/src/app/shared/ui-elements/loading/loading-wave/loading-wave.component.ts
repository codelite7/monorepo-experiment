import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Colors, GrayColors, ColorTheme } from '@services/model';

@Component({
  selector: 'fz-loading-wave',
  templateUrl: './loading-wave.component.html',
  styleUrls: ['./loading-wave.component.scss'],
})
export class LoadingWaveComponent implements OnInit {
  @Input() borderSize = 4;

  @Input() size = 40;

  @Input() color: Colors | GrayColors | ColorTheme = 'primary';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.init(this.borderSize, this.size, this.color);
  }

  ngOnChanges(changes) {
    const borderSize = changes.borderSize ? changes.borderSize.currentValue : this.borderSize;
    const size = changes.size ? changes.size.currentValue : this.size;
    const color = changes.color ? changes.color.currentValue : this.color;
    this.init(borderSize, size, color);
  }

  init(borderSize: number, size: number, color: string) {
    this.elementRef.nativeElement.style.setProperty('--border-size', `${borderSize}px`);
    this.elementRef.nativeElement.style.setProperty('--size', `${size}px`);
    this.elementRef.nativeElement.style.setProperty('--color', `var(--${color})`);
  }
}
