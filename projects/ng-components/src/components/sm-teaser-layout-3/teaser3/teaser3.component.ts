import { Component, Input } from '@angular/core';
import { ITeaser } from '../sm-teaser3.component';

@Component({
  selector: 'sm-teaser-3',
  templateUrl: './teaser3.component.html',
  styleUrls: ['./teaser3.component.scss'],
})
export class TeaserComponent {
  @Input() teaser: ITeaser;
}
