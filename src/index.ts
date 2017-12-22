import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoundProgressComponent} from './round-progress.component';
import {RoundProgressConfig} from './round-progress.config';
import {RoundProgressEase} from './round-progress.ease';
import {RoundProgressService} from './round-progress.service';

export * from './round-progress.component';
export * from './round-progress.service';
export * from './round-progress.ease';
export * from './round-progress.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      RoundProgressComponent
  ],
  exports: [
      RoundProgressComponent
  ]
})
export class NgxRoundProgressModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxRoundProgressModule,
      providers: [RoundProgressService, RoundProgressEase, RoundProgressConfig]
    };
  }
}
