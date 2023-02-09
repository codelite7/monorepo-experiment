import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-docslink',
  templateUrl: './docslink.component.html',
  styleUrls: ['./docslink.component.scss'],
})
export class DocslinkComponent implements OnInit {
  @Input() link: string = '';
  constructor() {}

  ngOnInit(): void {}
}
