import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  IBackgroundImagePosition,
  IBackgroundImageSize
} from '../teaser-stack.interface';

@Component({
  selector: 'sm-teaser-layout-1',
  templateUrl: './teaser-layout-1.component.html',
  styleUrls: ['./teaser-layout-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserLayout1Component {
  @Input() link?: string;
  @Input() teaserHeight?: number;
  @Input() imageUrl?: string;
  @Input() header?: string;
  @Input() description?: string;
  @Input() border?: boolean;
  @Input() borderColor?: string;
  @Input() textColor?: string;
  @Input() backgroundColor?: string;
  @Input() backgroundImageSize?: IBackgroundImageSize;
  @Input() backgroundImagePosition?: IBackgroundImagePosition;

  get teaserHeightForTemplate() {
    return this.teaserHeight ? `${this.teaserHeight}px` : undefined;
  }
}
