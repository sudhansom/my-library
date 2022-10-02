import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BannerLayout1Component } from './banner-layout-1.component';
import { BannerLayout1Module } from './banner-layout-1.module';

export default {
  title: 'Sitemule-Page/Banner-Layout-1',
  component: BannerLayout1Component,

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RouterTestingModule, BannerLayout1Module],
    }),
  ],
} as Meta;
const heroInfo = {
  title: 'Få gode råd om valg af det rigtige værktøj',
  height: 500,
  description:
    'Om du har brug for hjælp til at vælge det rigtige værktøj eller et godt råd til en svær opgave, så er vi klar til at stille vores viden til rådighed for dig, så du får det helt rigtige udstyr til din opgave.',
  contentPosition: 'left',
  contentTextColor: 'white',
  contentBackgroundColor: 'rgb(0, 59, 110)',
  fullPageWidth: true,
  backgroundImage: {
    url: 'https://www.folkelarsen.dk/cms-media/page/hero-frontpage.jpg',
    position: 'center top',
    size: 'cover',
    fullPageWidth: true,
  },
  links: [
    {
      label: 'SE VORES PRODUKTER',
      href: 'https://www.folkelarsen.dk/page1',
      target: '_blank',
      size: 'md',
      theme: 'primary',
      stroked: true,
    },
  ],
};
const Template: Story<BannerLayout1Component> = (args: BannerLayout1Component) => ({
  component: BannerLayout1Component,
  props: args,
});
export const type1 = Template.bind({});
type1.storyName = 'image-fullPageWidth-true';
type1.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: heroInfo.contentPosition as any,
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: heroInfo.fullPageWidth,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: heroInfo.backgroundImage.fullPageWidth,
  links: heroInfo.links as any,
};

export const type2 = Template.bind({});
type2.storyName = 'image-fullPageWidth-false';
type2.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: heroInfo.contentPosition as any,
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: heroInfo.fullPageWidth,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: false,
  links: heroInfo.links as any,
};

export const type3 = Template.bind({});
type3.storyName = 'contentPosition-left';
type3.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: 'left',
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: heroInfo.fullPageWidth,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: heroInfo.backgroundImage.fullPageWidth,
  links: heroInfo.links as any,
};

export const type4 = Template.bind({});
type4.storyName = 'contentPosition-right';
type4.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: 'right',
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: heroInfo.fullPageWidth,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: heroInfo.backgroundImage.fullPageWidth,
  links: heroInfo.links  as any,
};

export const type5 = Template.bind({});
type5.storyName = 'left-content-fullPageWidth-true';
type5.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: 'left',
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: heroInfo.fullPageWidth,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: true,
  links: heroInfo.links as any,
};

export const type6 = Template.bind({});
type6.storyName = 'right-content-fullPageWidth-true';
type6.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: 'right',
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: heroInfo.fullPageWidth,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: true,
  links: heroInfo.links  as any,
};

export const type7 = Template.bind({});
type7.storyName = 'many-button-links';
type7.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: 'right',
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: heroInfo.fullPageWidth,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: true,
  links: [
    {
      label: 'SE VORES PRODUKTEr',
      href: 'https://www.folkelarsen.dk/page1',
      target: '_blank',
      size: 'md',
      theme: 'primary',
      stroked: true,
    },
    {
      label: 'SE MERE',
      href: 'https://www.folkelarsen.dk/page1',
      target: '_blank',
      size: 'md',
      theme: 'primary',
      stroked: true,
    },
  ],
};

export const type8 = Template.bind({});
type8.storyName = 'buttons-with-different-themes';
type8.args = {
  title: heroInfo.title,
  height: heroInfo.height,
  description: heroInfo.description,
  contentPosition: 'right',
  contentTextColor: heroInfo.contentTextColor,
  contentBackgroundColor: heroInfo.contentBackgroundColor,
  fullPageWidth: false,
  backgroundImagePosition: heroInfo.backgroundImage.position,
  backgroundImageSize: heroInfo.backgroundImage.size,
  backgroundImageUrl: heroInfo.backgroundImage.url,
  backgroundImageFullPageWidth: true,
  links: [
    {
      label: 'SE VORES PRODUKTEr',
      href: 'https://www.folkelarsen.dk/page1',
      target: '_blank',
      size: 'md',
      theme: 'primary',
      stroked: true,
    },
    {
      label: 'SE MERe',
      href: 'https://www.folkelarsen.dk/page1',
      target: '_blank',
      size: 'sm',
      theme: 'success',
      stroked: true,
    },
  ],
};
