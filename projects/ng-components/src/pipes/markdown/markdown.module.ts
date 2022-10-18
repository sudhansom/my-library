import { NgModule } from '@angular/core';
import { MarkdownPipe } from './markdown.pipe';

@NgModule({
  declarations: [
    MarkdownPipe
  ],
  imports: [],
  exports: [MarkdownPipe],
  providers: [],
})
export class MarkdownPipeModule { }
