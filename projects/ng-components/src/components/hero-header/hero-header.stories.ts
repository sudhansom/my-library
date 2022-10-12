import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeroHeaderComponent } from './hero-header.component';
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


const headerLinks = [
  {
    label: 'Get Started',
    href: 'https://www.folkelarsen.dk/page1',
    backgroundColor: '#9925f1',
    color: 'white',
    size: 'lg' as 'lg',
    textSize: 'lg' as 'lg',
    mobileTabletSize: 'md' as 'md',
    mobileTextSize: 'md' as 'md',
    borderRadius: '10px',
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

export const heroHeaderWithVideo = Template.bind({});
heroHeaderWithVideo.storyName = 'hero-header-layout1 with video';
heroHeaderWithVideo.args = {
  header: 'Twenty five minutes from now',
  description:
    'You will build a web based customer service directly integrated to your IBM i™',
  note: 'No BS required. Just download and use.',
  links: headerLinks,
  youtubeSrc: 'https://www.youtube.com/embed/Yj2iELI6OeI?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=Yj2iELI6OeI'
};

export const heroHeaderSitemule = Template.bind({});
heroHeaderSitemule.storyName = 'hero-header-sitemule';
heroHeaderSitemule.args = {
  topHeader: 'LAYOUT & TEMA',
  header: 'Få flere designs hurtigt',
  description:
    'Ny variant, farve, størrelse, indhold, opbygning eller måske vil du bare ændre lidt i dit eksisterende udvalg? Vi hjælper dig. Simple konstruktioner og ændringer fra 1 time.',
  links: headerLinks,
  image: 'https://media.istockphoto.com/photos/copenhagen-denmark-at-nyhavn-canal-picture-id587892190?k=20&m=587892190&s=612x612&w=0&h=0GMRGE6VkLb61ryGz--XwoBD6ns0kwNWf-Dz9Agx_ew=',
  theme: '#00131B',
};

export const heroHeaderSitemuleWithVideo = Template.bind({});
heroHeaderSitemuleWithVideo.storyName = 'hero-header-sitemule with video';
heroHeaderSitemuleWithVideo.args = {
  topHeader: 'LAYOUT & TEMA',
  header: 'Få flere designs hurtigt',
  description:
    'Ny variant, farve, størrelse, indhold, opbygning eller måske vil du bare ændre lidt i dit eksisterende udvalg? Vi hjælper dig. Simple konstruktioner og ændringer fra 1 time.',
  links: headerLinks,
  youtubeSrc: 'https://www.youtube.com/embed/Yj2iELI6OeI?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=Yj2iELI6OeI'
};
