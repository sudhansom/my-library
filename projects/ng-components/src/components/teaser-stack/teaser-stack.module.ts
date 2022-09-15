import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';
import { TeaserLayout1Component } from './teaser-layout-1/teaser-layout-1.component';
import { TeaserLayout2Component } from './teaser-layout-2/teaser-layout-2.component';
import { TeaserStackLayout1Component } from './teaser-stack-layout-1/teaser-stack-layout-1.component';
import { TeaserStackComponent } from './teaser-stack.component';
import { TeaserComponent } from './teaser/teaser.component';

@NgModule({
  declarations: [
    TeaserStackComponent,
    TeaserStackLayout1Component,
    TeaserComponent,
    TeaserLayout1Component,
    TeaserLayout2Component,
  ],
  imports: [CommonModule, NgxMasonryModule, RouterModule],
  exports: [TeaserStackComponent],
  providers: [],
})
export class TeaserStackModule {}
