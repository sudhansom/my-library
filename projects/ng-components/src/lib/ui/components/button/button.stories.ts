import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Sitemule-Ui/Button',
  component: ButtonComponent,
  parameters: {
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `<button sitemule-button>Button</button>`
});
export const SuccessButton = Template.bind({});
SuccessButton.storyName = "Button";
SuccessButton.args = {
  color: 'success'
}
