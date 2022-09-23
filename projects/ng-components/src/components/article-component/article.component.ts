import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ILink{
  topLink?: boolean
  label: string
  href: string
  target: string
  backgroundColor: string
  color: string
}

@Component({
  selector: 'sm-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() imagePosition: string = 'left';
  @Input() image: string = '';
  @Input() icon: string = '';
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() links: ILink[] | undefined | null = [];
}
