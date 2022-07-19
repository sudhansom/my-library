import { Component, HostBinding, Input } from '@angular/core';


type ButtonSize = 'sm' | 'md' | 'lg';
@Component({
  selector: '[sitemule-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() stroked = false;
  @Input() uppercase = false;
  @Input() color = '';
  @Input() size : ButtonSize = 'md';

  @HostBinding('class') get HostClass() {
    return `${this.color} ${this.loading ? 'loading' : ''} ${
      this.fullWidth ? 'full-width' : ''
    } ${this.stroked ? 'stroked' : 'not-stroked'} size-${this.size} ${this.uppercase ? 'uppercase' : ''}`;
  }

  constructor() {}
}
