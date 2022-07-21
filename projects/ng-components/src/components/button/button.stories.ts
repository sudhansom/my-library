import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'Sitemule-Ui/Button',
  component: ButtonComponent,
  parameters: {
  },
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta;
const ButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `
    <button sitemule-button
      ${args.loading ? 'loading' : ''}
      ${args.fullWidth ? 'fullWidth' : ''}
      ${args.stroked ? 'stroked' : ''}
      ${args.uppercase ? 'uppercase' : ''}
      color="${args.color}"
      size="${args.size}">Button</button>`
});
export const ButtonButton = ButtonTemplate.bind({});
ButtonButton.storyName = "as button";
ButtonButton.args = {
  color: 'success'
}

const AnchorTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `
    <a sitemule-button href="https://sitemule.dk"
      ${args.loading ? 'loading' : ''}
      ${args.fullWidth ? 'fullWidth' : ''}
      ${args.stroked ? 'stroked' : ''}
      ${args.uppercase ? 'uppercase' : ''}
      color="${args.color}"
      size="${args.size}">A href</a>`
});
export const AnchorButton = AnchorTemplate.bind({});
AnchorButton.storyName = "as anchor link";
AnchorButton.args = {
  color: 'success'
}
