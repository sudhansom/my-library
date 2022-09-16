import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeaserLayout1Module } from '../teaser-layout-1/teaser-layout-1.module';
import { TeaserLayout2Module } from '../teaser-layout-2/teaser-layout-2.module';
import { TeaserLayout3Module } from '../teaser-layout-3/teaser-layout-3.module';
import { TeaserComponent } from './teaser.component';

@NgModule({
  declarations: [
    TeaserComponent
  ],
  imports: [CommonModule, TeaserLayout1Module, TeaserLayout2Module, TeaserLayout3Module],
  exports: [
    TeaserComponent
  ],
  providers: [],
})
export class TeaserModule {}
