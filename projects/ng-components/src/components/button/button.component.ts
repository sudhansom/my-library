import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

type ButtonSize = 'sm' | 'md' | 'lg';
type TextSize = ButtonSize;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[sitemule-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() stroked = false;
  @Input() uppercase = false;
  @Input() color?: string; // 'success' | 'primary' | 'accent' | 'danger';
  @Input() size: ButtonSize = 'md';
  @Input() textSize: TextSize = 'md';
  @Input() mobileTabletSize: ButtonSize = 'md';
  @Input() mobileTextSize: TextSize = 'md';
  @Input() borderRadius = '5px';

  @HostBinding('class') get HostClass() {
    return `${this.color ? this.color : ''} ${
      this.loading !== false ? 'loading' : ''
    } ${this.fullWidth !== false ? 'full-width' : ''} ${
      this.stroked !== false ? 'stroked' : 'not-stroked'
    } size-${this.size} mobileTabletSize-${this.mobileTabletSize}
      textSize-${this.textSize} mobileTextSize-${this.mobileTextSize}
    ${this.uppercase !== false ? 'uppercase' : ''}`;
  }

  @HostBinding('style.--border-radius') get buttonRadius() {
    return `${this.borderRadius}`;
 };

}
