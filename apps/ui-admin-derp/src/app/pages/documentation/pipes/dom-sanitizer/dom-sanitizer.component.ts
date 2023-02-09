import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-dom-sanitizer',
  templateUrl: './dom-sanitizer.component.html',
  styleUrls: ['./dom-sanitizer.component.scss'],
})
export class DomSanitizerComponent implements OnInit {
  example = `{{ variable | fzSanitizer: 'html' }}`;

  example1 = `{{ variable | fzSanitizer: 'style' }}`;

  example2 = `{{ variable | fzSanitizer: 'script' }}`;

  example3 = `{{ variable | fzSanitizer: 'url' }}`;

  example4 = `{{ variable | fzSanitizer: 'resourceUrl' }}`;

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-pipes-dom-sanitizer');
  }
}
