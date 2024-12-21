// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, StoryObj } from '@storybook/angular';

import {
  ButtonSize,
  ButtonStyle,
  SingleButtonComponent,
} from './single-button.component';

const meta: Meta<SingleButtonComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'UI/Components/SingleButton',
  component: SingleButtonComponent,
};

export default meta;
type Story = StoryObj<SingleButtonComponent>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
