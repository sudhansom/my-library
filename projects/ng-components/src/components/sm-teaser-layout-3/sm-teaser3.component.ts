import { Component, Input } from '@angular/core';

export interface ITeaserStack {
  teaserHeight?: number;
  columnCount?: number;
  layout: 'gggg' | 'hhhh';
  title?: string;
  teasers: ITeaser[];
}

export interface ITeaser {
  imageUrl: string;
  header: string;
}

@Component({
  selector: 'sm-teaser-layout-3',
  templateUrl: './sm-teaser3.component.html',
  styleUrls: ['./sm-teaser3.component.scss'],
})
export class TeaserStackComponent {
  @Input() teaserStack: ITeaserStack;

  constructor() {}
}
