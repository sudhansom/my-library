import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type TargetType = '_blank' | '_self'  | '_parent' | '_top';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ILink {
  topLink?: boolean;
  label: string;
  href: string;
  target?: TargetType;
  backgroundColor: string;
  color: string;
  size: ButtonSize;
  textSize: ButtonSize;
  mobileTabletSize: ButtonSize;
  mobileTextSize: ButtonSize;
  borderRadius: string;
}

@Component({
  selector: 'sm-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroHeaderComponent {
  @Input() topHeader: string = '';
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() note: string = '';
  @Input() links?: ILink[] = [];
  @Input() image: string = '';
  @Input() youtubeSrc: string = '';
}
