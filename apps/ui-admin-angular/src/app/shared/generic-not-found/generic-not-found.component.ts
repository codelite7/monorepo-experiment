import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-not-found',
  templateUrl: './generic-not-found.component.html',
  styleUrls: ['./generic-not-found.component.scss'],
})
export class GenericNotFoundComponent implements OnInit {
  @Input() title? = 'NOT FOUND';
  @Input() text? = 'The page you were looking for was not found';
  @Input() icon? = 'fa-exclamation-triangle';
  @Input() color? = 'warning';
  constructor() {}

  ngOnInit(): void {}
}
