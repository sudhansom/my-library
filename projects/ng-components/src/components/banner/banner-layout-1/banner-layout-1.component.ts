import { Component, Input } from '@angular/core';

interface ILinks {
  label: string;
  href: string;
  size: 'lg' | 'sm' | 'md';
  theme: string;
  stroked: boolean;
  target?: string;
}

@Component({
  selector: 'sm-banner-layout-1',
  templateUrl: './banner-layout-1.component.html',
  styleUrls: ['./banner-layout-1.component.scss'],
})
export class BannerLayout1Component {
  @Input() title = '';
  @Input() description = '';
  @Input() height?: number;
  @Input() contentPosition: 'left' | 'right' = 'left';
  @Input() fullPageWidth = false;

  @Input() backgroundImagePosition = '';
  @Input() backgroundImageSize = '';
  @Input() backgroundImageUrl = '';
  @Input() backgroundImageFullPageWidth = false;

  @Input() contentTextColor = '';
  @Input() contentBackgroundColor = '';

  @Input() links: ILinks[] = [];
}
