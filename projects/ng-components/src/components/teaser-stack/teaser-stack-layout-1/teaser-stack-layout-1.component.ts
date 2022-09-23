import { ChangeDetectionStrategy, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { NgxMasonryComponent } from 'ngx-masonry';
import { IBackgroundImagePosition, IBackgroundImageSize, ITeaserStackLayout } from '../teaser-stack.interface';
import { ITeaser } from '../teaser/teaser.component';


@Component({
  selector: 'sm-teaser-stack-layout-1',
  templateUrl: './teaser-stack-layout-1.component.html',
  styleUrls: ['./teaser-stack-layout-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserStackLayout1Component implements OnDestroy {
  @Input() teaserHeight?: number;
  @Input() columnCount?: number = 3;
  @Input() rowCount?: number;
  @Input() title?: string;
  @Input() description?: string;
  @Input() teasers: ITeaser[] = [];
  @Input() backgroundColor?: string;
  @Input() fullPageWidth? = false;
  @Input() readMoreLink?: string;
  @Input() readMoreLabel?: string;
  @Input() layout: ITeaserStackLayout = 'layout-1';
  @Input() backgroundImage?: string;
  @Input() backgroundImageSize?: IBackgroundImageSize = 'cover';
  @Input() backgroundImagePosition?: IBackgroundImagePosition = 'center center';

  @ViewChild(NgxMasonryComponent) masonry?: NgxMasonryComponent;

  private timeoutTimer?: NodeJS.Timeout;

  reDoLayout() {
    this.timeoutTimer = setTimeout(() => {
      this.masonry?.reloadItems();
      this.masonry?.layout();
    }, 1000);
  }

  get useMasonry() {
    // Layout-1 has default height
    if (this.layout === 'layout-1') {
      return false;
    }
    return !this.teaserHeight || this.teasers.every(teaser => !teaser.teaserHeight);
  }

  get finalTeasers() {
    if (this.rowCount && this.columnCount) {
      const totalItems = this.columnCount * this.rowCount;
      if (this.teasers.length <= totalItems) {
        return this.teasers;
      }
      return this.teasers.splice(0, totalItems);
    }
    return this.teasers;
  }

  trackByFn(_index: number, teaser: ITeaser) {
    return teaser.header;
  }

  ngOnDestroy() {
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
    }
  }
}
