import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent {
  @Output() userEmitter = new EventEmitter<string>();
}
