import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '../../../directives/navigation/navigation.module';
import { TeaserLayout3Component } from './teaser-layout-3.component';

@NgModule({
  declarations: [
    TeaserLayout3Component,
  ],
  imports: [CommonModule, NavigationModule],
  exports: [
    TeaserLayout3Component,
  ],
  providers: [],
})
export class TeaserLayout3Module {}
