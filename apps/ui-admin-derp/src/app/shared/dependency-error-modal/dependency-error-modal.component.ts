import { Component, Injectable, Input, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { Dependency } from '@shared/dependency-error-modal/dependencies';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';

@Component({
  selector: 'app-dependency-error-modal',
  templateUrl: './dependency-error-modal.component.html',
  styleUrls: ['./dependency-error-modal.component.scss'],
})
export class DependencyErrorModalComponent implements OnInit {
  @ViewChild('sharedDependencyErrorModal')
  sharedDependencyErrorModal: ModalComponent;
  @Input() errorMessage: string;
  @Input() dependencies: Dependency[];

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.sharedDependencyErrorModal.show();
  }
}
