import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITeaserStackLayout } from '../teaser-stack.interface';
import { ITeaser } from '../teaser/teaser.component';


@Component({
  selector: 'sm-teaser-stack-layout-1',
  templateUrl: './teaser-stack-layout-1.component.html',
  styleUrls: ['./teaser-stack-layout-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserStackLayout1Component {
  @Input() teaserHeight?: number;
  @Input() columnCount?: number = 3;
  @Input() title?: string;
  @Input() teasers: ITeaser[] = [];
  @Input() layout: ITeaserStackLayout = 'layout-1';

  get useMasonry() {
    // Layout-1 has default height
    if (this.layout === 'layout-1') {
      return false;
    }
    return !this.teaserHeight || this.teasers.every(teaser => !teaser.teaserHeight);
  }

  constructor() {}
}
