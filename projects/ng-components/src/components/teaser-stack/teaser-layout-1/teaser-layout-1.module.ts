import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '../../../directives/navigation/navigation.module';
import { TeaserLayout1Component } from './teaser-layout-1.component';

@NgModule({
  declarations: [
    TeaserLayout1Component,
  ],
  imports: [CommonModule, NavigationModule],
  exports: [
    TeaserLayout1Component,
  ],
  providers: [],
})
export class TeaserLayout1Module {}
