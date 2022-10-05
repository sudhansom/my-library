import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[smYoutubeSrc]',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeVideoSrcComponent implements OnInit {
  private _smYoutubeSrc = '';
  @Input() set smYoutubeSrc(src: string) {
    if (src === this._smYoutubeSrc) {
      return;
    }

    this._smYoutubeSrc = src;
    if (this.smYoutubeSrc) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.smYoutubeSrc);
    }
    else {
      this.renderer.removeAttribute(this.el.nativeElement, 'src');
    }
  }

  get smYoutubeSrc() {
    return this._smYoutubeSrc;
  }

  aspectRatio = 16 / 9;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:resize', ['$event'])
  calcHeightWidth() {
    const { clientHeight, clientWidth } = this.el.nativeElement.parentElement;
    const parentAspectRatio = clientWidth / clientHeight;

    if (parentAspectRatio > this.aspectRatio) {
      this.renderer.setStyle(this.el.nativeElement, 'height', `${105 + (((parentAspectRatio - this.aspectRatio) / this.aspectRatio) * 100)}%`);
      this.renderer.setStyle(this.el.nativeElement, 'width', '105%');
    }
    else if (parentAspectRatio < this.aspectRatio) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${105 + (((this.aspectRatio - parentAspectRatio) / parentAspectRatio) * 100)}%`);
      this.renderer.setStyle(this.el.nativeElement, 'height', '105%');
    }
    else {
      this.renderer.setStyle(this.el.nativeElement, 'width', '105%');
      this.renderer.setStyle(this.el.nativeElement, 'height', '105%');
    }
  }

  ngOnInit() {
    this.calcHeightWidth();
  }
}
