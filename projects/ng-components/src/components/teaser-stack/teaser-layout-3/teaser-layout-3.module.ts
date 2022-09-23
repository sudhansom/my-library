import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScaleImageDirectiveModule } from '../../../directives/scaleimage/scale-image.module';
import { NavigationModule } from '../../../directives/navigation/navigation.module';
import { TeaserLayout3Component } from './teaser-layout-3.component';

@NgModule({
  declarations: [
    TeaserLayout3Component,
  ],
  imports: [CommonModule, NavigationModule, ScaleImageDirectiveModule],
  exports: [
    TeaserLayout3Component,
  ],
  providers: [],
})
export class TeaserLayout3Module {}
