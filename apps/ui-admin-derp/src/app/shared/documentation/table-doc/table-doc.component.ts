import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fz-table-doc',
  templateUrl: './table-doc.component.html',
  styleUrls: ['./table-doc.component.scss'],
})
export class TableDocComponent implements OnInit {
  @Input() type: 'input' | 'output' | 'content' = 'input';

  constructor() {}

  ngOnInit() {}
}
