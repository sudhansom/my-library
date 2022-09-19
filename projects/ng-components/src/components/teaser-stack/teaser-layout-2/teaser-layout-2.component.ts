import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBackgroundImagePosition, IBackgroundImageSize } from '../teaser-stack.interface';

@Component({
  selector: 'sm-teaser-layout-2',
  templateUrl: './teaser-layout-2.component.html',
  styleUrls: ['./teaser-layout-2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserLayout2Component {
  @Input() link?: string;
  @Input() teaserHeight?: number;
  @Input() imageUrl?: string;
  @Input() header?: string;
  @Input() description?: string;
  @Input() border?: string;
  @Input() hoverBorder?: string;
  @Input() boxShadow?: string;
  @Input() hoverBoxShadow?: string;
  @Input() textColor?: string;
  @Input() backgroundColor?: string;
  @Input() backgroundImageSize?: IBackgroundImageSize = 'cover';
  @Input() backgroundImagePosition?: IBackgroundImagePosition = 'center center';
}
