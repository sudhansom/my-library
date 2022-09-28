import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationModule as NavigationDirectiveModule } from '../../directives/navigation/navigation.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationDirectiveModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationComponentModule { }
