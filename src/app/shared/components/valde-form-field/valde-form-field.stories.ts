// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { withTests } from '@storybook/addon-jest';

import { ValdeFormFieldComponent } from './valde-form-field.component';

import * as results from '../../../../../.jest-test-results.json';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'shared/components/ValdeFormField',
  component: ValdeFormFieldComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  decorators: [withTests({ results })],
  parameters: { jest: ['valde-form-field.component.test.ts'] },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ValdeFormFieldComponent> = (
  args: ValdeFormFieldComponent
) => ({
  props: args,
});

export const TextFormField = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TextFormField.args = {
  type: 'text',
  label: 'text Field',
  id: 'labelText',
  placeholder: 'Sample text here',
};
TextFormField.parameters = {
  ...TextFormField.parameters,
  docs: {
    source: {
      code: `<app-valde-form-field [id]="'labelText'" label="Text field" type="text" placeholder="Sample text here" (valueChanged)="onValueChanged($event)"></app-valde-form-field>`,
      language: 'typescript',
      type: 'auto',
    },
  },
};
