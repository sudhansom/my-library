import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';

import { ArticleComponent } from './article.component';
import { MarkdownPipeModule } from '../../pipes/markdown/markdown.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ButtonModule, MarkdownPipeModule],
  exports: [ArticleComponent],
  providers: [],
})
export class ArticleModule {}
