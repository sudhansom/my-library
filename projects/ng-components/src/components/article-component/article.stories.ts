import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ArticleComponent } from './article.component';
import { ArticleModule } from './article.module';

export default {
  title: 'Sitemule-Ui/Article',
  component: ArticleComponent,

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RouterTestingModule, ArticleModule],
    }),
  ],
} as Meta;

const links = [
  {
    label: 'Get Started',
    href: 'https://www.folkelarsen.dk/page1',
    target: '_blank',
    backgroundColor: '#9925f1',
    color: 'white',
    size: 'sm',
    stroked: true,
  },
  {
    label: 'Or get support',
    href: 'https://www.folkelarsen.dk/page1',
    target: '_blank',
    backgroundColor: 'rgb(248, 248, 248)',
    color: '#9925f1',
    size: 'md',
    stroked: true,
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
  image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  icon: '../../assets/images/dashboard2.png',
  header: 'Dashboards that facilitate daily business',
  description:
    'Flexible and in total control of your hands with simple CMS like handling. Use your IBM i™ data and create endless diagrams on the fly. Create fast and easy new tables to overview important numbers, contact information and much more.',
  links: links,
};

export const articleComponentRight = Template.bind({});
articleComponentRight.storyName = 'article-right';
articleComponentRight.args = {
  imagePosition: 'right',
  image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
  icon: '../../assets/images/dashboard2.png',
  header: 'Dashboards that facilitate daily business',
  description:
    'Flexible and in total control of your hands with simple CMS like handling. Use your IBM i™ data and create endless diagrams on the fly. Create fast and easy new tables to overview important numbers, contact information and much more.',
  links: links,
};
