import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ArticleComponent } from './article.component';
import { ArticleModule } from './article.module';

export default {
  title: 'Sitemule-Ui/Article',
  component: ArticleComponent,

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ArticleModule],
    }),
  ],
} as Meta;

const links = [
  {
    label: 'Get Started',
    href: 'https://www.folkelarsen.dk/page1',
    backgroundColor: '#9925f1',
    color: 'white',
    borderRadius: '25px',
    size: 'lg' as 'lg',
    textSize: 'lg' as 'lg',
    mobileTabletSize: 'md' as 'md',
    mobileTextSize: 'md' as 'md',
  },
  {
    label: 'Or get support',
    href: 'https://www.folkelarsen.dk/page1',
    backgroundColor: 'rgb(248, 248, 248)',
    color: '#9925f1',
    borderRadius: '25px',
    size: 'lg' as 'lg',
    textSize: 'lg' as 'lg',
    mobileTabletSize: 'md' as 'md',
    mobileTextSize: 'md' as 'md',
  },
];
const sitemuleLinks = [
  {
    label: 'Skitseark',
    href: 'https://www.folkelarsen.dk/page1',
    backgroundColor: '#00A1FD',
    color: 'white',
    borderRadius: '25px',
    size: 'lg' as 'lg',
    textSize: 'lg' as 'lg',
    mobileTabletSize: 'md' as 'md',
    mobileTextSize: 'md' as 'md',
    icon: true,
  },
  {
    label: 'Inspiration',
    href: 'https://www.folkelarsen.dk/page1',
    backgroundColor: 'rgb(248, 248, 248)',
    color: '#00A1FD',
    borderRadius: '25px',
    size: 'lg' as 'lg',
    textSize: 'lg' as 'lg',
    mobileTabletSize: 'md' as 'md',
    mobileTextSize: 'md' as 'md',
  },
];

const Template: Story<ArticleComponent> = (args: ArticleComponent) => ({
  component: ArticleComponent,
  props: args,
});

export const articleComponentLeft = Template.bind({});
articleComponentLeft.storyName = 'article-left';
articleComponentLeft.args = {
  imagePosition: 'left',
  image:
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  icon: '../../assets/images/dashboard2.png',
  header: 'Dashboards that facilitate daily business',
  description:
    'Flexible and in total control of your hands with simple CMS like handling. Use your IBM i™ data and create endless diagrams on the fly. Create fast and easy new tables to overview important numbers, contact information and much more.',
  links: links,
  imageBorderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  textColor: '#887D8C',
};

export const articleComponentRight = Template.bind({});
articleComponentRight.storyName = 'article-right';
articleComponentRight.args = {
  imagePosition: 'right',
  image:
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  icon: '../../assets/images/dashboard2.png',
  header: 'Dashboards that facilitate daily business',
  description:
    'Flexible and in total control of your hands with simple CMS like handling. Use your IBM i™ data and create endless diagrams on the fly. Create fast and easy new tables to overview important numbers, contact information and much more.',
  links: links,
  imageBorderRadius: '10px',
  backgroundColor: 'rgb(248, 248, 248)',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  textColor: '#887D8C',
};

export const articleForSitemuleRight = Template.bind({});
articleForSitemuleRight.storyName = 'article-sitemule-right';
articleForSitemuleRight.args = {
  imagePosition: 'right',
  image:
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  header: 'Design ny tekstside',
  description:
    'En teaser handler om call-to-action, en opfordring til handling med et forventet konverteringsforløb. Målet skal ikke ­ nødvendigvis være et køb, men kan være et signup eller aflevering af andet specifikt budskab branding mv.',
  links: sitemuleLinks,
  imageBorderRadius: '10px',
  backgroundColor: 'rgb(248, 248, 248)',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  textColor: '#7D868C',
};

export const articleForSitemuleLeft = Template.bind({});
articleForSitemuleLeft.storyName = 'article-sitemule-left';
articleForSitemuleLeft.args = {
  imagePosition: 'left',
  image:
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  header: 'Design ny Hero',
  description:
    'En teaser handler om call-to-action, en opfordring til handling med et forventet konverteringsforløb. Målet skal ikke ­ nødvendigvis være et køb, men kan være et signup eller aflevering af andet specifikt budskab branding mv.',
  links: sitemuleLinks,
  imageBorderRadius: '10px',
  backgroundColor: 'rgb(248, 248, 248)',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  textColor: '#7D868C',
};

export const articleWithButtonIcon = Template.bind({});
articleWithButtonIcon.storyName = 'article-with-button-icon';
articleWithButtonIcon.args = {
  imagePosition: 'left',
  image:
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  header: 'Design ny Hero',
  description:
    'En teaser handler om call-to-action, en opfordring til handling med et forventet konverteringsforløb. Målet skal ikke ­ nødvendigvis være et køb, men kan være et signup eller aflevering af andet specifikt budskab branding mv.',
  links: sitemuleLinks,
  imageBorderRadius: '10px',
  backgroundColor: 'rgb(248, 248, 248)',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  textColor: '#7D868C',
  buttonIcon: 'https://cdn-icons-png.flaticon.com/512/724/724933.png',
};

export const articleWithRawHtml = Template.bind({});
articleWithRawHtml.storyName = 'article-with-raw-html';
articleWithRawHtml.args = {
  imagePosition: 'left',
  image:
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  header: 'Design ny Teaser',
  description:
    'En teaser handler om call-to-action, en opfordring til handling med et forventet konverteringsforløb. Målet skal ikke ­ nødvendigvis være et køb, men kan være et signup eller aflevering af andet specifikt budskab branding mv. <br /> <br /> <b>Lav dit eget oplæg eller få hjælps</b><br />Download og print vores A4 skitseark og tegn løs. <br /><u>Kontakt os og få hjælp.</u>',
  links: sitemuleLinks,
  imageBorderRadius: '10px',
  backgroundColor: 'rgb(248, 248, 248)',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  textColor: '#7D868C',
  buttonIcon: 'https://cdn-icons-png.flaticon.com/512/724/724933.png',
};
