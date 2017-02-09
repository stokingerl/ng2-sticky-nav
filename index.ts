import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StickyNavDirective} from './src/sticky-nav.directive';

export * from './src/sticky-nav.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StickyNavDirective
  ],
  exports: [
    StickyNavDirective
  ]
})
export class StickyNavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StickyNavModule
    };
  }
}
