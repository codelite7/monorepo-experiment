import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Colors, ColorTheme } from '@services/model';
import { MainService } from '@main/main.service';

@Component({
  selector: 'fz-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss'],
})
export class CircularProgressComponent implements OnInit {
  /**
   * Size
   *
   * @type {number}
   */
  @Input() size = 0;

  /**
   * Text center
   *
   * @type {string}
   */
  @Input() text: string;

  /**
   * Circle color
   *
   * @type {(Colors | ColorTheme)}
   */
  @Input() color: Colors | ColorTheme = 'dark';

  /**
   * Animation time
   * EX: 1s
   *
   * @type {string}
   */
  @Input() animationTime: string;

  /**
   * Stroke circle
   *
   * @type {number}
   */
  @Input() strokeCircle = 3;

  /**
   * Stroke circle bg
   *
   * @type {number}
   */
  @Input() strokeCircleBg = 2.5;

  private darkModeEmit: any;

  constructor(public mainService: MainService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.addProperty();

    this.addPropertyDarkTheme(this.mainService.getDarkTheme());
    this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) => this.addPropertyDarkTheme(res));
  }

  ngOnChanges(changes) {
    this.addProperty();
  }

  ngOnDestroy(): void {
    this.darkModeEmit.unsubscribe();
  }

  addProperty() {
    if (this.color) {
      this.elementRef.nativeElement.style.setProperty('--circle-color', `var(--${this.color})`);
    }
    if (this.animationTime) {
      this.elementRef.nativeElement.style.setProperty('--animation-time', this.animationTime);
    }
    if (this.strokeCircle) {
      this.elementRef.nativeElement.style.setProperty('--stroke-circle', this.strokeCircle);
    }
    if (this.strokeCircleBg) {
      this.elementRef.nativeElement.style.setProperty('--stroke-circle-bg', this.strokeCircleBg);
    }
  }

  addPropertyDarkTheme(dark: boolean) {
    this.elementRef.nativeElement.style.setProperty(
      '--stroke-circle-color',
      `var(--${dark ? 'gray-700' : 'gray-200'})`
    );
    this.elementRef.nativeElement.style.setProperty('--text-color', `var(--${dark ? 'gray-100' : 'gray-600'})`);
  }
}
