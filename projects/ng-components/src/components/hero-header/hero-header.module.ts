import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { HeroHeaderComponent } from './hero-header.component';

@NgModule({
  declarations: [HeroHeaderComponent],
  imports: [CommonModule, ButtonModule],
  exports: [HeroHeaderComponent],
  providers: [],
})
export class HeroHeaderModule {}
