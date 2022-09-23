import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { prefixScaleImageUrl } from '../../utils/prefixScaleImageUrl';

const calculateOptimalWidth = (width: number, widthRounding: number, maxWidth: number) => {
  let optimalWidth = width;

  if (widthRounding) {
    optimalWidth = Math.ceil(width / widthRounding) * widthRounding;
  }

  if (optimalWidth > maxWidth) {
    return maxWidth;
  }

  return optimalWidth;
};

/**
 * Directive to auto set width to scale-image and lazy load image
 * Usage <img [smScaleImage]="imgPath" [smWidthRounding]="100" [smMaxWidth] = "1220">
 * Use <img src="{{imgPath | scaleImage: 500}}" loading="lazy"> if you want static width
 */

@Directive({
  selector: '[smScaleImage]',
})
export class ScaleImageDirective implements OnInit, OnDestroy {
  private _imageUrl = '';

  @Input() set smScaleImage(imageUrl: string) {
    if (this._imageUrl !== imageUrl) {
      this._imageUrl = imageUrl;
      this.appendImage();
    }
  }

  get imageUrl() {
    return this._imageUrl;
  }

  @Input() smWidthRounding = 0;
  @Input() smMaxWidth = 1500;

  private visible = false;
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0) {
        this.visible = true;
        this.appendImage();
        this.unsubscribeObserver();
      }
    });

    this.observer.observe(this.el.nativeElement);
  }

  appendImage() {
    if (this.imageUrl && this.visible) {
      const isImg = this.el.nativeElement.tagName.toLowerCase() === 'img';

      if (isImg) {
        // Add srcset and sizes if needed
        this.renderer.setAttribute(
          this.el.nativeElement,
          'src',
          prefixScaleImageUrl(this.imageUrl, {
            width: calculateOptimalWidth(this.el.nativeElement.parentElement.offsetWidth, this.smWidthRounding, this.smMaxWidth),
            padCanvas: false
          })
        );
      }
      else {
        this.renderer.setStyle(
          this.el.nativeElement,
          'backgroundImage',
          `url('${prefixScaleImageUrl(this.imageUrl, {
            width: calculateOptimalWidth(this.el.nativeElement.offsetWidth, this.smWidthRounding, this.smMaxWidth),
            padCanvas: false
          })}')`
        );
      }
    }
  }

  unsubscribeObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  ngOnDestroy() {
    this.unsubscribeObserver();
  }
}
