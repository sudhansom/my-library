import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeroHeaderComponent, ILink } from './hero-header.component';
import { HeroHeaderModule } from './hero-header.module';


export default {
  title: 'Sitemule-Ui/HeroHeader',
  component: HeroHeaderComponent,
  parameters: {
  },
  decorators: [
    moduleMetadata({
      imports: [HeroHeaderModule],
    }),
  ],
} as Meta;


const headerLinks: ILink[] = [
  {
    label: 'Get Started',
    href: 'https://www.folkelarsen.dk/page1',
    target: '_blank',
    backgroundColor: '#9925f1',
    color: 'white',
  }
];

const Template: Story<HeroHeaderComponent> = (args:HeroHeaderComponent) => ({
  component:HeroHeaderComponent,
  props: args,
});

export const heroHeader = Template.bind({});
heroHeader.storyName = 'hero-header-layout1';
heroHeader.args = {
  header: 'Twenty five minutes from now',
  description:
    'You will build a web based customer service directly integrated to your IBM i™',
  note: 'No BS required. Just download and use.',
  links: headerLinks,
  image: 'https://media.istockphoto.com/photos/copenhagen-denmark-at-nyhavn-canal-picture-id587892190?k=20&m=587892190&s=612x612&w=0&h=0GMRGE6VkLb61ryGz--XwoBD6ns0kwNWf-Dz9Agx_ew=',
};
