import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type TargetType = '_blank' | '_self'  | '_parent' | '_top';

export interface ILink{
  topLink?: boolean
  label: string
  href: string
  target: TargetType
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
  @Input() imagePosition: 'left' | 'right' = 'left';
  @Input() image: string = '';
  @Input() icon: string = '';
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() links: ILink[] = [];
}
