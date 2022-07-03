// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  ButtonSize,
  ButtonStyle,
  ValdeButtonComponent,
} from './valde-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'ValdeComponent/ValdeButton',
  component: ValdeButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ValdeButtonComponent> = (args: ValdeButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  buttonStyle: ButtonStyle.Primary,
  label: 'Primary',
  size: ButtonSize.Medium,
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonStyle: ButtonStyle.Secondary,
  label: 'Secondary',
  size: ButtonSize.Medium,
};

export const Large = Template.bind({});
Large.args = {
  buttonStyle: ButtonStyle.Success,
  label: 'Large',
  size: ButtonSize.Large,
};

export const Small = Template.bind({});
Small.args = {
  buttonStyle: ButtonStyle.Danger,
  label: 'Small',
  size: ButtonSize.Small,
};

export const Outline = Template.bind({});
Outline.args = {
  buttonStyle: ButtonStyle.Warning,
  label: 'Outline',
  outline: true,
  size: ButtonSize.Medium,
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonStyle: ButtonStyle.Primary,
  disabled: true,
  label: 'Disabled',
  size: ButtonSize.Medium,
};
