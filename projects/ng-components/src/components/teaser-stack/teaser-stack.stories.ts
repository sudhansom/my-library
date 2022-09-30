import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeaserStackComponent } from './teaser-stack.component';
import { TeaserStackModule } from './teaser-stack.module';
import { ITeaser } from './teaser/teaser.component';

export default {
  title: 'Sitemule-Page/Teaser-Stack',
  component: TeaserStackComponent,

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RouterTestingModule, TeaserStackModule],
    }),
  ],
} as Meta;

const teaserstack = {
  columnCount: 3,
  layout: 'layout-1',
  title: 'Science articles header',
  description: 'Description test',
  teasers: [
    {
      imageUrl:
        'https://media.istockphoto.com/photos/nyhavn-copenhagen-denmark-picture-id901375804?k=20&m=901375804&s=612x612&w=0&h=LjDZ-dPGoCVU-xy-A4TyU8y6amshakYf5uTPWIKU5e8=',
      header: 'How customers won’t feel alone',
      description:
        'Starbucks uses round tables specifically so customers won’t feel alone. The lack of edges makes it seem less like people are missing. The lack of edges makes it seem less like people are missing.',
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'cover',
      backgroundImagePosition: 'center center',
    },
    {
      imageUrl:
        'http://ekkotek.com/MobileApps/youtubeApi/examples/images/Swan_large.jpg',
      header: 'The best known brand in the world',
      description:
        'The Coca-Cola logo can be recognized by 94 percent of the world’s population',
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'cover',
      backgroundImagePosition: 'center center',
    },
    {
      imageUrl:
        'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/9154/1655441194954/front-left-side-47.jpg?tr=w-375',
      header: 'Tuesday',
      description:
        'On average the most productive day of the workweek is Tuesday',
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'cover',
      backgroundImagePosition: 'center center',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1551651767-d5ffbdd04b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29wZW5oYWdlbnxlbnwwfHwwfHw%3D&w=1000&q=80',
      header: "The Meaning Behind Yahoo's Full Name",
      description:
        "Yahoo stands for 'Yet Another Hierarchical Officious Oracle.' Learn more about the meaning of Yahoo and how it became a household name.'",
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'cover',
      backgroundImagePosition: 'center center',
    },
    {
      imageUrl:
        'https://cdn.theatlantic.com/media/img/photo/2020/11/montana-photos/a01_23355789779-1/original.jpg',
      header: 'Ah Ikea, how we love you so',
      description: 'One in 10 Europeans are conceived in an Ikea bed',
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'cover',
      backgroundImagePosition: 'center center',
    },
    {
      imageUrl:
        'https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg',
      header: 'Google was originally called BackRub',
      description:
        'Google cofounders Larry Page and Sergey Brin are definitely fans of wordplay, and they seem to have a thing for company names that are both goofy and yet significant at the same time.',
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'cover',
      backgroundImagePosition: 'center center',
    },
  ],
};
const Template: Story<TeaserStackComponent> = (args: TeaserStackComponent) => ({
  component: TeaserStackComponent,
  props: args,
});

export const _1_Layout1WithFixHeight = Template.bind({});
_1_Layout1WithFixHeight.storyName = 'Layout 1 with fix height';
_1_Layout1WithFixHeight.args = {
  columnCount: teaserstack.columnCount,
  layout: teaserstack.layout as any,
  title: teaserstack.title,
  description: teaserstack.description,
  teaserHeight: 350,
  teasers: teaserstack.teasers as ITeaser[],
};

export const _2_Layout1WithResponsiveHeight = Template.bind({});
_2_Layout1WithResponsiveHeight.storyName = 'Layout 1 with responsive height';
_2_Layout1WithResponsiveHeight.args = {
  columnCount: teaserstack.columnCount,
  layout: teaserstack.layout as any,
  title: teaserstack.title,
  description: teaserstack.description,
  teasers: teaserstack.teasers as ITeaser[],
};

export const _3_Layout2WithFixHeight = Template.bind({});
_3_Layout2WithFixHeight.storyName = 'Layout 2 with fix height';
_3_Layout2WithFixHeight.args = {
  columnCount: teaserstack.columnCount,
  layout: 'layout-2',
  title: teaserstack.title,
  description: teaserstack.description,
  teaserHeight: 300,
  teasers: teaserstack.teasers as ITeaser[],
};

export const _4_Layout2WithResponsiveHeight = Template.bind({});
_4_Layout2WithResponsiveHeight.storyName = 'Layout 2 with responsive height';
_4_Layout2WithResponsiveHeight.args = {
  columnCount: teaserstack.columnCount,
  layout: 'layout-2',
  title: teaserstack.title,
  description: teaserstack.description,
  teasers: teaserstack.teasers as ITeaser[],
};

export const _5_Layout2WithBackgroundColor = Template.bind({});
_5_Layout2WithBackgroundColor.storyName = 'Layout 2 with background color';
_5_Layout2WithBackgroundColor.args = {
  columnCount: teaserstack.columnCount,
  layout: 'layout-2',
  title: teaserstack.title,
  description: teaserstack.description,
  teaserHeight: 300,
  backgroundColor: '#dddddd',
  teasers: teaserstack.teasers.map(teaser => {
    return {
      ...teaser,
      imageUrl: undefined,
      backgroundColor: ['#226c22', '#2a4d7b', 'rgb(0, 59, 110)'][Math.floor(Math.random() * 3)]
    }
  }) as ITeaser[],
};

export const _6_Layout2WithResponsiveHeight = Template.bind({});
_6_Layout2WithResponsiveHeight.storyName = 'Layout 2 with responsive height and full-width';
_6_Layout2WithResponsiveHeight.args = {
  columnCount: teaserstack.columnCount,
  layout: 'layout-2',
  title: teaserstack.title,
  description: teaserstack.description,
  fullPageWidth: true,
  teasers: teaserstack.teasers as ITeaser[],
};


export const _7_Layout1WithMixedTeaser = Template.bind({});
_7_Layout1WithMixedTeaser.storyName =
  'Layout 1 teaser stack with, mixed layout teaser';
_7_Layout1WithMixedTeaser.args = {
  columnCount: teaserstack.columnCount,
  layout: teaserstack.layout as any,
  title: teaserstack.title,
  description: teaserstack.description,
  teasers: teaserstack.teasers
    .map((teaser, index) => {
      const override = (() => {
        if (index === 0) {
          return {
            border: false,
            backgroundColor: '#123456',
            textColor: 'white',
            borderColor: 'red',
          };
        }
        if (index === 1) {
          return {
            border: false,
            backgroundColor: 'white',
            textColor: '#123456',
            borderColor: 'red',
          };
        }
        return {};
      })();
      return {
        ...teaser,
        ...override,
      };
    })
    .map((teaser, index) => {
      if (index % 2) {
        return {
          ...teaser,
          layout: 'layout-2',
        };
      }

      return teaser;
    }) as ITeaser[],
};


export const _8_Layout2WithRowCount = Template.bind({});
_8_Layout2WithRowCount.storyName = 'With row count';
_8_Layout2WithRowCount.args = {
  columnCount: teaserstack.columnCount,
  layout: 'layout-2',
  title: teaserstack.title,
  description: teaserstack.description,
  fullPageWidth: true,
  rowCount: 1,
  teaserHeight: 300,
  teasers: teaserstack.teasers as ITeaser[],
};

export const _9_Layout2WithReadMoreLink = Template.bind({});
_9_Layout2WithReadMoreLink.storyName = 'With read-more link';
_9_Layout2WithReadMoreLink.args = {
  columnCount: teaserstack.columnCount,
  layout: 'layout-2',
  title: teaserstack.title,
  description: teaserstack.description,
  fullPageWidth: true,
  rowCount: 1,
  teaserHeight: 300,
  readMoreLabel: 'Read more',
  readMoreLink: '/abc/def',
  teasers: teaserstack.teasers as ITeaser[],
};

export const _10_Layout1WithMixedTeaser = Template.bind({});
_10_Layout1WithMixedTeaser.storyName =
  'Layout 1 teaser stack with links';
_10_Layout1WithMixedTeaser.args = {
  columnCount: teaserstack.columnCount,
  layout: teaserstack.layout as any,
  title: teaserstack.title,
  description: teaserstack.description,
  teasers: teaserstack.teasers
    .map((teaser, index) => {
      return {
        ...teaser,
        link: `/index/${index}`,
        linkTarget: 'blank'
      };
    }) as ITeaser[],
};

const images = [
  'https://folkelarsen.dk/cms-media/catalog/308490B.JPG',
  'https://folkelarsen.dk/pp-static/images/QXX_display.png',
  'https://folkelarsen.dk/cms-media/catalog/623XB.jpg',
  'https://folkelarsen.dk/cms-media/catalog/W011100B.png',
  'https://folkelarsen.dk/cms-media/catalog/4214037b.jpg',
  'https://folkelarsen.dk/pp-static/images/4218087Ba.jpg',
  'https://folkelarsen.dk/cms-media/catalog/4243525B2.JPG',
  'https://folkelarsen.dk/cms-media/catalog/11663B.jpg',
  'https://folkelarsen.dk/pp-static/images/product/70218Ba.jpg',
  'https://folkelarsen.dk/pp-static/images/85553.jpg',
]
export const _11_Layout3WithResponsiveHeight = Template.bind({});
_11_Layout3WithResponsiveHeight.storyName = 'Layout 3 with responsive height';
_11_Layout3WithResponsiveHeight.args = {
  columnCount: 5,
  layout: 'layout-3',
  title: 'Layout-3 with responsive height',
  teasers: images.map((imageUrl, index) => {
    return {
      imageUrl,
      header: `Header ${index}`,
      description: `Description ${index}`,
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'contain',
      backgroundImagePosition: 'center center',
    };
  }) as ITeaser[]
};
export const _12_Layout3WithFixedHeight = Template.bind({});
_12_Layout3WithFixedHeight.storyName = 'Layout 3 with fix height';
_12_Layout3WithFixedHeight.args = {
  columnCount: 5,
  layout: 'layout-3',
  title: 'Layout-3 with fix height',
  description: 'Teasers have link',
  teaserHeight: 100,
  fullPageWidth: true,
  teasers: images.map((imageUrl, index) => {
    return {
      imageUrl,
      link: `/index/${index}`,
      header: `Header ${index}`,
      description: `Description ${index}`,
      border: `1px solid rgba(0,0,0,.1)`,
      boxShadow: `0 2px 7px 0 rgba(0, 0, 0, 0.1)`,
      hoverBoxShadow: `0 8px 13px 0 rgba(0, 0, 0, 0.16)`,
      backgroundImageSize: 'contain',
      backgroundColor: '#fff',
      backgroundImagePosition: 'center center',
    };
  }) as ITeaser[]
};
export const _13_Layout3WithFixedHeight = Template.bind({});
_13_Layout3WithFixedHeight.storyName = 'Layout 3 with fix height and without text';
_13_Layout3WithFixedHeight.args = {
  columnCount: 5,
  layout: 'layout-3',
  title: 'Layout-3 with fix height and without text',
  description: 'Teasers have link',
  teaserHeight: 150,
  teasers: images.map((imageUrl, index) => {
    return {
      imageUrl,
      link: `/index/${index}`,
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'contain',
      backgroundImagePosition: 'center center',
    };
  }) as ITeaser[]
};

export const _14_Layout3WithResponsiveHeight = Template.bind({});
_14_Layout3WithResponsiveHeight.storyName = 'Layout 3 with responsive height and without text';
_14_Layout3WithResponsiveHeight.args = {
  columnCount: 5,
  layout: 'layout-3',
  title: 'Layout-3 with responsive height and without text',
  description: 'Teasers have link',
  teasers: images.map((imageUrl, index) => {
    return {
      imageUrl,
      link: `/index/${index}`,
      border: '1px solid #DBDBDB',
      backgroundImageSize: 'contain',
      backgroundImagePosition: 'center center',
    };
  }) as ITeaser[]
};

export const _15_Layout3WithFixedHeight = Template.bind({});
_15_Layout3WithFixedHeight.storyName = 'Layout 3 with fix height and background image';
_15_Layout3WithFixedHeight.args = {
  columnCount: 5,
  layout: 'layout-3',
  title: 'Layout-3 with fix height and without text',
  description: 'Teasers have link',
  teaserHeight: 150,
  backgroundImage: 'https://static-cse.canva.com/blob/572029/removingbackgroundimages_Unsplash.jpeg',
  teasers: images.map((imageUrl, index) => {
    return {
      imageUrl,
      link: `/index/${index}`,
      backgroundImageSize: 'contain',
      backgroundColor: '#fff',
      backgroundImagePosition: 'center center',
      border: `1px solid rgba(0,0,0,.1)`,
      boxShadow: `0 2px 7px 0 rgba(0, 0, 0, 0.1)`,
      hoverBoxShadow: `0 8px 13px 0 rgba(0, 0, 0, 0.16)`,
    };
  }) as ITeaser[]
};
