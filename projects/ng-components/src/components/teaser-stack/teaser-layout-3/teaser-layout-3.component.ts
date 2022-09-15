import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBackgroundImagePosition, IBackgroundImageSize } from '../teaser-stack.interface';

@Component({
  selector: 'sm-teaser-layout-3',
  templateUrl: './teaser-layout-3.component.html',
  styleUrls: ['./teaser-layout-3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserLayout3Component {
  @Input() teaserHeight?: number = 150;
  @Input() imageUrl?: string;
  @Input() header?: string;
  @Input() description?: string;
  @Input() border?: boolean;
  @Input() borderColor?: string;
  @Input() textColor?: string;
  @Input() backgroundColor?: string;
  @Input() backgroundImageSize?: IBackgroundImageSize = 'cover';
  @Input() backgroundImagePosition?: IBackgroundImagePosition = 'center center';
}
