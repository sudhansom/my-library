import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '../../../directives/navigation/navigation.module';
import { TeaserLayout1Component } from './teaser-layout-1.component';
import { ScaleImageDirectiveModule } from '../../../directives/scaleimage/scale-image.module';

@NgModule({
  declarations: [
    TeaserLayout1Component,
  ],
  imports: [CommonModule, NavigationModule, ScaleImageDirectiveModule],
  exports: [
    TeaserLayout1Component,
  ],
  providers: [],
})
export class TeaserLayout1Module {}
