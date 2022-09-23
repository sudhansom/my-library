import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '../../../directives/navigation/navigation.module';
import { TeaserLayout2Component } from './teaser-layout-2.component';
import { ScaleImageDirectiveModule } from '../../../directives/scaleimage/scale-image.module';

@NgModule({
  declarations: [
    TeaserLayout2Component,
  ],
  imports: [CommonModule, NavigationModule, ScaleImageDirectiveModule],
  exports: [
    TeaserLayout2Component,
  ],
  providers: [],
})
export class TeaserLayout2Module {}
