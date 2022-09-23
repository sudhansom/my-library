import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';
import { ScaleImageDirectiveModule } from '../../../directives/scaleimage/scale-image.module';
import { NavigationModule } from '../../../directives/navigation/navigation.module';
import { TeaserModule } from '../teaser/teaser.module';
import { TeaserStackLayout1Component } from './teaser-stack-layout-1.component';

@NgModule({
  declarations: [
    TeaserStackLayout1Component,
  ],
  imports: [CommonModule, NgxMasonryModule, TeaserModule, BrowserAnimationsModule, NavigationModule, ScaleImageDirectiveModule],
  exports: [
    TeaserStackLayout1Component,
  ],
  providers: [],
})
export class TeaserStackLayout1Module {}
