import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBackgroundImagePosition, IBackgroundImageSize, ITeaserStackLayout } from './teaser-stack.interface';
import { ITeaser } from './teaser/teaser.component';

@Component({
  selector: 'sm-teaser-stack',
  templateUrl: './teaser-stack.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserStackComponent {
  @Input() teaserHeight?: number;
  @Input() columnCount?: number;
  @Input() rowCount?: number;
  @Input() title?: string;
  @Input() description?: string;
  @Input() teasers: ITeaser[] = [];
  @Input() backgroundColor?: string;
  @Input() fullPageWidth?: boolean;
  @Input() readMoreLink?: string;
  @Input() readMoreLabel?: string;
  @Input() layout: ITeaserStackLayout = 'layout-1';
  @Input() backgroundImage?: string;
  @Input() backgroundImageSize?: IBackgroundImageSize = 'cover';
  @Input() backgroundImagePosition?: IBackgroundImagePosition = 'center center';
}
