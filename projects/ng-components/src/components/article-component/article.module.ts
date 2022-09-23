import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';

import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ArticleComponent],
  providers: [],
})
export class ArticleModule {}
