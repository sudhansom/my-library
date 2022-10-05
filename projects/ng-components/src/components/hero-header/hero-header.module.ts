import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YoutubeVideoSrcModule } from '../../directives/video/video.module';
import { ButtonModule } from '../button/button.module';
import { HeroHeaderComponent } from './hero-header.component';

@NgModule({
  declarations: [
    HeroHeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    YoutubeVideoSrcModule,
  ],
  exports: [
    HeroHeaderComponent
  ],
  providers: [],
})
export class HeroHeaderModule {}
