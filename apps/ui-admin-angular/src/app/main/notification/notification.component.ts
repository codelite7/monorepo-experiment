import { Component, OnInit, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from './notification.service';
import { FadeAnimation } from 'src/app/animation';

@Component({
  selector: 'fz-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [FadeAnimation()],
})
export class NotificationComponent implements OnInit {
  @ViewChild('notification') notificationEl: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.widthNotification();
  }

  constructor(public notificationService: NotificationService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.notificationService.notificationEvent.subscribe((res) => this.widthNotification());
  }

  widthNotification() {
    if (this.notificationService.status) {
      this.cd.detectChanges();
      if (this.notificationEl && this.notificationEl.nativeElement) {
        this.notificationEl.nativeElement.style.setProperty(
          '--width-notification',
          `${this.notificationEl.nativeElement.clientWidth}px`
        );
      }
    }
  }
}
