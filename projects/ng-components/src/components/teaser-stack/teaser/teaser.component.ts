import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBackgroundImagePosition, IBackgroundImageSize, ITeaserLayout } from '../teaser-stack.interface';

export interface ITeaser {
  link?: string;
  teaserHeight?: number;
  imageUrl?: string;
  header?: string;
  description?: string;
  border?: boolean;
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  backgroundImageSize?: IBackgroundImageSize;
  backgroundImagePosition?: IBackgroundImagePosition;
  layout?: ITeaserLayout;
}

@Component({
  selector: 'sm-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserComponent {
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
  @Input() layout: ITeaserLayout = 'layout-1';
}
