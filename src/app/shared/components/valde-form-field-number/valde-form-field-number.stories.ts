// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { withTests } from '@storybook/addon-jest';
import * as results from '../../../../../.jest-test-results.json';
import { ValdeFormFieldNumberComponent } from './valde-form-field-number.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'shared/components/ValdeFormFieldNumber',
  component: ValdeFormFieldNumberComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  decorators: [withTests({ results })],
  parameters: { jest: ['valde-form-field.component.test.ts'] },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ValdeFormFieldNumberComponent> = (
  args: ValdeFormFieldNumberComponent
) => ({
  props: args,
});

export const TextFormField = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TextFormField.args = {
  label: 'text Field',
  id: 'labelText',
  placeholder: 'Sample text here',
};
TextFormField.parameters = {
  ...TextFormField.parameters,
  docs: {
    source: {
      code: `<app-valde-form-field
          [id]="'labelText'"
          label="Text field"
          placeholder="Sample text here"
          (valueChanged)="onValueChanged($event)"
          (valueHasError)="onValueHasError($event)"
        ></app-valde-form-field>`,
      language: 'typescript',
      type: 'auto',
    },
  },
};
