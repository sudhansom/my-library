import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeaserStackComponent } from './sm-teaser3.component';
import { TeaserComponent } from './teaser3/teaser3.component';


export default {
  title: 'Sitemule-Ui/sm-teaser-layout-3',
  component: TeaserStackComponent,

  decorators: [
    moduleMetadata({
      declarations: [TeaserComponent],
      imports: [],
    }),
  ],
} as Meta;

const teaserstack = {
  columnCount: 3,
  layout: 'gggg',
  title: 'A new type of teaser stack',
  teasers: [
    {
      imageUrl:
        './images/1.png',
      header: 'Trykluftværktøj',
    },
    {
      imageUrl:
        './images/2.png',
      header: 'Slibematerialer',
    },
    {
      imageUrl:
        './images/3.png',
      header: 'Automatik',
    },
    {
      imageUrl:
        './images/4.png',
      header: 'Håndværktøj',
    },
    {
      imageUrl:
        './images/5.png',
      header: 'Akkuværktøj',
    },
    {
      imageUrl:
        './images/6.png',
      header: 'El-montageværktøj',
    },
    {
      imageUrl:
        './images/7.png',
      header: 'Automatik',
    },
    {
      imageUrl:
        './images/8.png',
      header: 'Gearudvekslinger',
    },
    {
      imageUrl:
        './images/9.png',
      header: 'Aflastningsarme',
    },
    {
      imageUrl:
        './images/10.png',
      header: 'Krafttoppe og bits',
    },
    {
      imageUrl:
        './images/11.png',
      header: 'Automatik',
    },
    {
      imageUrl:
        './images/12.png',
      header: 'Krafttoppe',
    },

  ],
};
const Template: Story<TeaserStackComponent> = (args: TeaserStackComponent) => ({
  component: TeaserStackComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.storyName = 'sm-teaser-layout-3';
Primary.args = {
  teaserStack: teaserstack,
};


