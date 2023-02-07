import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// --------------------
// THIRD-PARTY MODULES
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxMaskModule } from 'ngx-mask';
import { MomentModule } from 'ngx-moment';
import { HighlightModule } from 'ngx-highlightjs';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ChartsModule } from '@rinminase/ng-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';

// --------------------
// DOCUMENTATION
import { ModalDocColorsComponent } from './documentation/modal-doc-colors/modal-doc-colors.component';
import { ModalDocAnimationsComponent } from './documentation/modal-doc-animations/modal-doc-animations.component';
import { TableDocComponent } from './documentation/table-doc/table-doc.component';

// --------------------
// UI ELEMENTS
import { TableComponent } from './ui-elements/table/table.component';
import { PanelTableComponent } from './ui-elements/table/panel-table/panel-table.component';
import { CardComponent } from './ui-elements/card/card.component';
import { BadgeComponent } from './ui-elements/badge/badge.component';
import { AlertComponent } from './ui-elements/alert/alert.component';
import { PaginationComponent } from './ui-elements/pagination/pagination.component';
import { ScrollbarComponent } from './ui-elements/scrollbar/scrollbar.component';
import { MessageAlertComponent } from './ui-elements/message-alert/message-alert.component';
import { UserImageComponent } from './ui-elements/user-image/user-image.component';

import { ModalComponent } from './ui-elements/modal/modal.component';
import { ModalDialogComponent } from './ui-elements/modal/modal-dialog/modal-dialog.component';

import { IconCounterComponent } from './ui-elements/icon/icon-counter/icon-counter.component';
import { IconColorCircleComponent } from './ui-elements/icon/icon-color-circle/icon-color-circle.component';

import { DropdownComponent } from './ui-elements/dropdown/dropdown.component';
import { DropdownDirective } from './ui-elements/dropdown/dropdown.directive';

import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { BreadcrumbModule } from './ui-elements/breadcrumb/breadcrumb.module';
import { LoadingModule } from './ui-elements/loading/loading.module';
import { TabModule } from './ui-elements/tab/tab.module';
import { ListGroupModule } from './ui-elements/list-group/list-group.module';
import { ProgressModule } from './ui-elements/progress/progress.module';
import { AccordionModule } from './ui-elements/accordion/accordion.module';
import { RatingComponent } from './ui-elements/rating/rating.component';

// --------------------
// NAVIGATION
import { BrandComponent } from './navigation/brand/brand.component';
import { SendEmailComponent } from './navigation/send-email/send-email.component';
import { ModalFingerprintComponent } from './navigation/modal-fingerprint/modal-fingerprint.component';
import { CircularProgressComponent } from './ui-elements/circular-progress/circular-progress.component';
import { GenericNotFoundComponent } from './generic-not-found/generic-not-found.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';
import { OutputsSelectorComponent } from './outputs-selector/outputs-selector.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DependencyErrorModalComponent } from './dependency-error-modal/dependency-error-modal.component';
import { DependencyIsPipelinePipe } from './dependency-error-modal/dependency-is-pipeline.pipe';
import { ResetPositionComponent } from './reset-position/reset-position.component';
import { DocslinkComponent } from './docslink/docslink.component';
import { AceEditorComponent } from './ace-editor/ace-editor.component';

@NgModule({
  declarations: [
    // --------------------
    // UI ELEMENTS
    // general
    TableComponent,
    PanelTableComponent,
    CardComponent,
    BadgeComponent,
    AlertComponent,
    PaginationComponent,
    ScrollbarComponent,
    MessageAlertComponent,
    UserImageComponent,
    RatingComponent,
    CircularProgressComponent,
    // modal
    ModalComponent,
    ModalDialogComponent,
    // icon
    IconCounterComponent,
    IconColorCircleComponent,
    // dropdown
    DropdownComponent,
    DropdownDirective,
    // --------------------
    // NAVIGATION
    BrandComponent,
    SendEmailComponent,
    ModalFingerprintComponent,
    // --------------------
    // DOCUMENTATION
    ModalDocColorsComponent,
    ModalDocAnimationsComponent,
    TableDocComponent,
    GenericNotFoundComponent,
    GenericErrorComponent,
    OutputsSelectorComponent,
    DependencyErrorModalComponent,
    DependencyIsPipelinePipe,
    ResetPositionComponent,
    DocslinkComponent,
    AceEditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MomentModule,
    NgxMaskModule.forRoot(),
    HighlightModule,
    ClickOutsideModule,
    CKEditorModule,
    ChartsModule,
    DragDropModule,
    DirectivesModule,
    PipesModule,
    // --------------------
    // UI ELEMENTS
    BreadcrumbModule,
    LoadingModule,
    TabModule,
    ListGroupModule,
    ProgressModule,
    AccordionModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    MultiSelectModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    NgxMaskModule,
    HighlightModule,
    MomentModule,
    CKEditorModule,
    ChartsModule,
    DragDropModule,
    DirectivesModule,
    PipesModule,
    // --------------------
    // UI ELEMENTS
    // modules
    BreadcrumbModule,
    LoadingModule,
    TabModule,
    ListGroupModule,
    ProgressModule,
    AccordionModule,
    // general
    TableComponent,
    PanelTableComponent,
    CardComponent,
    BadgeComponent,
    AlertComponent,
    PaginationComponent,
    ScrollbarComponent,
    MessageAlertComponent,
    UserImageComponent,
    RatingComponent,
    CircularProgressComponent,
    // modal
    ModalComponent,
    ModalDialogComponent,
    // icon
    IconCounterComponent,
    IconColorCircleComponent,
    // dropdown
    DropdownComponent,
    DropdownDirective,
    // --------------------
    // NAVIGATION
    BrandComponent,
    SendEmailComponent,
    ModalFingerprintComponent,
    // --------------------
    // DOCUMENTATION
    ModalDocColorsComponent,
    ModalDocAnimationsComponent,
    TableDocComponent,
    GenericNotFoundComponent,
    GenericErrorComponent,
    OutputsSelectorComponent,
    DependencyErrorModalComponent,
    ResetPositionComponent,
    DocslinkComponent,
    AceEditorComponent,
  ],
})
export class SharedModule {}
