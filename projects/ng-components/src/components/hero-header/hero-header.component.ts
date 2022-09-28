import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type TargetType = '_blank' | '_top';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ILink {
  topLink?: boolean;
  label: string;
  href: string;
  target: TargetType;
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
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() note: string = '';
  @Input() links: ILink[] | undefined = [];
  @Input() image: string = '';
}