import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeaserStackComponent } from './sm-teaser3.component';
import { TeaserComponent } from './teaser3/teaser3.component';


export default {
  title: 'Sitemule-UI/sm-teaser-layout-3',
  component: TeaserStackComponent,

  decorators: [
    moduleMetadata({
      declarations: [TeaserComponent],
      imports: [],
    }),
  ],
} as Meta;

const teaserstack = {
  columnCount: 4,
  title: 'A new type of teaser stack',
  teasers: [
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/14901.jpg?v=109559348',
      header: 'Trykluftværktøj',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/14751.jpg?v=109559333',
      header: 'Slibematerialer',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/14851.jpg?v=109559343',
      header: 'Automatik',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/15051.jpg?v=109559363',
      header: 'Håndværktøj',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/14901.jpg?v=109559348',
      header: 'Akkuværktøj',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/14751.jpg?v=109559333',
      header: 'El-montageværktøj',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/14851.jpg?v=109559343',
      header: 'Automatik',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/15051.jpg?v=109559363',
      header: 'Gearudvekslinger',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/15061.jpg?v=109559364',
      header: 'Aflastningsarme',
    },
    {
      imageUrl:
        'https://www.fotoagent.dk/images/w/QfRDscE-fLRME9np7xlyhA/s/12414/138/14841.jpg?v=109559342',
      header: 'Krafttoppe og bits',
    },
    {
      imageUrl:
        'https://cdn.bauhaus.dk/media/catalog/product/cache/c60540681005c49dab98fb6b7607af80/8/8/888ab756_1618_4ac5_96b4_d50b2b930854_1.jpg',
      header: 'Automatik',
    },
    {
      imageUrl:
        'https://cdn.bauhaus.dk/media/catalog/product/cache/c60540681005c49dab98fb6b7607af80/8/8/888ab756_1618_4ac5_96b4_d50b2b930854_1.jpg',
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


