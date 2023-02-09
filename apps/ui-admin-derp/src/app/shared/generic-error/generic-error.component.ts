import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss'],
})
export class GenericErrorComponent implements OnInit {
  @Input() title? = 'ERROR';
  @Input() text? = 'There was an error loading the page';
  @Input() icon? = 'fa-exclamation-triangle';
  @Input() color? = 'danger';

  constructor(public location: Location) {}

  ngOnInit(): void {}

  refresh(): void {
    window.location.reload();
  }
}
