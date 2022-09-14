import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITeaserStackLayout } from './teaser-stack.interface';
import { ITeaser } from './teaser/teaser.component';

@Component({
  selector: 'sm-teaser-stack',
  templateUrl: './teaser-stack.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserStackComponent {
  @Input() teaserHeight?: number;
  @Input() columnCount?: number;
  @Input() title?: string;
  @Input() teasers: ITeaser[] = [];
  @Input() layout: ITeaserStackLayout = 'layout-1';

  constructor() {}
}
