import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { LoadingGeneralService } from './loading-general.service';
import { FadeAnimation } from 'src/app/animation';

@Component({
  selector: 'fz-loading-general',
  templateUrl: './loading-general.component.html',
  styleUrls: ['./loading-general.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [FadeAnimation()],
})
export class LoadingGeneralComponent implements OnInit {
  constructor(public loadingGeneralService: LoadingGeneralService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.loadingGeneralService.loadingEvent.subscribe((res) => {
      this.elementRef.nativeElement.style.setProperty(
        '--background-overlay',
        `var(--${this.loadingGeneralService.backgroundOverlay})`
      );
    });
  }
}
