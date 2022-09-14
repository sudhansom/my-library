import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';


type ButtonSize = 'sm' | 'md' | 'lg';
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
  @Input() color = '';
  @Input() size : ButtonSize = 'md';

  @HostBinding('class') get HostClass() {
    return `${this.color} ${this.loading !== false ? 'loading' : ''} ${
      this.fullWidth !== false ? 'full-width' : ''
    } ${this.stroked !== false ? 'stroked' : 'not-stroked'} size-${this.size} ${this.uppercase !== false ? 'uppercase' : ''}`;
  }
}
