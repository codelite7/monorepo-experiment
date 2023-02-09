import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Colors, GrayColors, ColorTheme } from '@services/model';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements OnInit {
  @Input() color: Colors | GrayColors | ColorTheme = 'primary';

  @Input() colorLine: Colors | GrayColors | ColorTheme;

  @Input() heightLine = 3;

  private darkModeEmit: any;

  constructor(public mainService: MainService, private elementRef: ElementRef) {}

  ngOnInit() {
    if (!this.colorLine && this.mainService.getDarkTheme()) {
      this.colorLine = 'gray-800';
    }
    if (!this.colorLine && !this.mainService.getDarkTheme()) {
      this.colorLine = 'gray-300';
    }

    this.init(this.color, this.colorLine, this.heightLine);

    this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) => {
      this.elementRef.nativeElement.style.setProperty('--color-line', `var(--${res ? 'gray-800' : 'gray-300'})`);
    });
  }

  ngOnChanges(changes) {
    const color = changes.color ? changes.color.currentValue : this.color;
    const colorLine = changes.colorLine ? changes.colorLine.currentValue : this.colorLine;
    const heightLine = changes.heightLine ? changes.heightLine.currentValue : this.heightLine;
    this.init(color, colorLine, heightLine);
  }

  ngOnDestroy(): void {
    this.darkModeEmit.unsubscribe();
  }

  init(color: string, colorLine: string, heightLine: number) {
    this.elementRef.nativeElement.style.setProperty('--height-line', `${heightLine}px`);
    this.elementRef.nativeElement.style.setProperty('--color', `var(--${color})`);
    this.elementRef.nativeElement.style.setProperty('--color-line', `var(--${colorLine})`);
  }
}
