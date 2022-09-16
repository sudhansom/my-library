import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeaserStackLayout1Module } from './teaser-stack-layout-1/teaser-stack-layout-1.module';
import { TeaserStackComponent } from './teaser-stack.component';

@NgModule({
  declarations: [
    TeaserStackComponent,
  ],
  imports: [CommonModule, RouterModule, TeaserStackLayout1Module],
  exports: [TeaserStackComponent],
  providers: [],
})
export class TeaserStackModule {}
