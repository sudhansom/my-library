import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

export const isFullPath = (url: string) : boolean => {
  return url.startsWith('https') || url.startsWith('http');
}

@Directive({
  selector: '[smNavigate]',
})
export class NavigationDirective {
  private _url = '';
  @Input() set smNavigate(url: string) {
    this._url = url;
    this.renderer.setAttribute(this.el.nativeElement, 'href', this.url);
  }

  get url() {
    return this._url;
  }

  private _target = '';
  @Input() set smNavigateTarget(target: string) {
    this._target = target === 'blank' ? '_blank' : '';
    this.renderer.setAttribute(this.el.nativeElement, 'target', this.target);
  }

  get target() {
    return this._target;
  }

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {}


  @HostListener("click", ["$event"])
  public onClick(evt: Event): void
  {
    if(!this.url) {
      evt.preventDefault();
      return;
    }
    if (isFullPath(this.url)) {
      return;
    }

    evt.preventDefault();
    if (this.target === '_blank') {
      window.open(this.url, '_blank');
    }
    else {
      this.router.navigateByUrl(this.url);
    }
  }
}
