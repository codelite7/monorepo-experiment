import { Component, OnInit, Input, ElementRef, EventEmitter } from '@angular/core';
import { Colors, GrayColors, ColorTheme } from '@services/model';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-loading-circle',
  templateUrl: './loading-circle.component.html',
  styleUrls: ['./loading-circle.component.scss'],
})
export class LoadingCircleComponent implements OnInit {
  @Input() border = 4;

  @Input() size = 40;

  @Input() duration = 0.9;

  @Input() color: Colors | GrayColors | ColorTheme | '';

  @Input() borderColor: Colors | GrayColors | ColorTheme = 'primary';

  private darkModeEmit: any;

  constructor(public mainService: MainService, private elementRef: ElementRef) {}

  ngOnInit() {
    if (!this.color && this.mainService.getDarkTheme()) {
      this.color = 'gray-800';
    }
    if (!this.color && !this.mainService.getDarkTheme()) {
      this.color = 'gray-300';
    }

    this.init(this.color, this.borderColor);

    this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) => {
      this.elementRef.nativeElement.style.setProperty('--border-left-color', `var(--${res ? 'gray-800' : 'gray-300'})`);
    });
  }

  ngOnChanges(changes) {
    const color = changes.color ? changes.color.currentValue : this.color;
    const borderColor = changes.borderColor ? changes.borderColor.currentValue : this.borderColor;

    this.init(color, borderColor);
  }

  ngOnDestroy(): void {
    this.darkModeEmit.unsubscribe();
  }

  init(color: string, borderColor: string) {
    this.elementRef.nativeElement.style.setProperty('--border-left-color', `var(--${color})`);
    this.elementRef.nativeElement.style.setProperty('--border-color', `var(--${borderColor})`);
  }
}
