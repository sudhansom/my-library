import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NgComponentsComponent } from './ng-components.component';

export default {
  title: 'Example/MyLib',
  component: NgComponentsComponent,
} as Meta;

const Template: Story<NgComponentsComponent> = (args: NgComponentsComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<NgComponentsComponent>;
