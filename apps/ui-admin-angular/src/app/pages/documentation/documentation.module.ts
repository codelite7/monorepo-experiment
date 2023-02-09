import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertComponent } from './components/alert/alert.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { IconColorCircleComponent } from './components/icon-color-circle/icon-color-circle.component';
import { IconCounterComponent } from './components/icon-counter/icon-counter.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { LoadingCircleComponent } from './components/loading-circle/loading-circle.component';
import { LoadingCircle2Component } from './components/loading-circle2/loading-circle2.component';
import { LoadingCircleDotComponent } from './components/loading-circle-dot/loading-circle-dot.component';
import { LoadingWaveComponent } from './components/loading-wave/loading-wave.component';
import { MessageAlertComponent } from './components/message-alert/message-alert.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { TabComponent } from './components/tab/tab.component';
import { TableComponent } from './components/table/table.component';
import { UserImageComponent } from './components/user-image/user-image.component';
import { LoadingGeneralComponent } from './components/loading-general/loading-general.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ButtonComponent } from './directives/button/button.component';
import { ColorComponent } from './directives/color/color.component';
import { FocusComponent } from './directives/focus/focus.component';
import { ImageUtilitiesComponent } from './directives/image-utilities/image-utilities.component';
import { TipComponent } from './directives/tip/tip.component';
import { DomSanitizerComponent } from './pipes/dom-sanitizer/dom-sanitizer.component';
import { FilterComponent } from './pipes/filter/filter.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { RatingComponent } from './components/rating/rating.component';
import { CircularProgressComponent } from './components/circular-progress/circular-progress.component';

const routes: Routes = [
  {
    path: 'get-started',
    component: GetStartedComponent,
  },
  {
    path: 'pipes/filter',
    component: FilterComponent,
  },
  {
    path: 'pipes/dom-sanitizer',
    component: DomSanitizerComponent,
  },
  {
    path: 'directives/tip',
    component: TipComponent,
  },
  {
    path: 'directives/image-utilities',
    component: ImageUtilitiesComponent,
  },
  {
    path: 'directives/focus',
    component: FocusComponent,
  },
  {
    path: 'directives/color',
    component: ColorComponent,
  },
  {
    path: 'directives/button',
    component: ButtonComponent,
  },
  {
    path: 'components/user-image',
    component: UserImageComponent,
  },
  {
    path: 'components/table',
    component: TableComponent,
  },
  {
    path: 'components/tab',
    component: TabComponent,
  },
  {
    path: 'components/scrollbar',
    component: ScrollbarComponent,
  },
  {
    path: 'components/progress',
    component: ProgressComponent,
  },
  {
    path: 'components/pagination',
    component: PaginationComponent,
  },
  {
    path: 'components/modal-dialog',
    component: ModalDialogComponent,
  },
  {
    path: 'components/modal',
    component: ModalComponent,
  },
  {
    path: 'components/message-alert',
    component: MessageAlertComponent,
  },
  {
    path: 'components/loading-wave',
    component: LoadingWaveComponent,
  },
  {
    path: 'components/loading-circle-dot',
    component: LoadingCircleDotComponent,
  },
  {
    path: 'components/loading-circle2',
    component: LoadingCircle2Component,
  },
  {
    path: 'components/loading-circle',
    component: LoadingCircleComponent,
  },
  {
    path: 'components/loading-bar',
    component: LoadingBarComponent,
  },
  {
    path: 'components/list-group',
    component: ListGroupComponent,
  },
  {
    path: 'components/icon-counter',
    component: IconCounterComponent,
  },
  {
    path: 'components/icon-color-circle',
    component: IconColorCircleComponent,
  },
  {
    path: 'components/dropdown',
    component: DropdownComponent,
  },
  {
    path: 'components/card',
    component: CardComponent,
  },
  {
    path: 'components/breadcrumb',
    component: BreadcrumbComponent,
  },
  {
    path: 'components/badge',
    component: BadgeComponent,
  },
  {
    path: 'components/alert',
    component: AlertComponent,
  },
  {
    path: 'components/accordion',
    component: AccordionComponent,
  },
  {
    path: 'components/loading-general',
    component: LoadingGeneralComponent,
  },
  {
    path: 'components/notification',
    component: NotificationComponent,
  },
  {
    path: 'components/rating',
    component: RatingComponent,
  },
  {
    path: 'components/circular-progress',
    component: CircularProgressComponent,
  },
];

@NgModule({
  declarations: [
    AccordionComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    CardComponent,
    DropdownComponent,
    IconColorCircleComponent,
    IconCounterComponent,
    ListGroupComponent,
    LoadingBarComponent,
    LoadingCircleComponent,
    LoadingCircle2Component,
    LoadingCircleDotComponent,
    LoadingWaveComponent,
    MessageAlertComponent,
    ModalComponent,
    ModalDialogComponent,
    PaginationComponent,
    ProgressComponent,
    ScrollbarComponent,
    TabComponent,
    TableComponent,
    UserImageComponent,
    ButtonComponent,
    ColorComponent,
    FocusComponent,
    ImageUtilitiesComponent,
    TipComponent,
    DomSanitizerComponent,
    FilterComponent,
    GetStartedComponent,
    LoadingGeneralComponent,
    NotificationComponent,
    RatingComponent,
    CircularProgressComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DocumentationModule {}
