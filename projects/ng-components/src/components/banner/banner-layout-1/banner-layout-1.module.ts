import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '../../../directives/navigation/navigation.module';
import { ButtonModule } from '../../button/button.module';
import { BannerLayout1Component } from './banner-layout-1.component';

@NgModule({
  declarations: [BannerLayout1Component],
  imports: [NavigationModule, ButtonModule, CommonModule],
  exports: [BannerLayout1Component],
  providers: [],
})
export class BannerLayout1Module {}
