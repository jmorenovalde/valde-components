// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { withTests } from '@storybook/addon-jest';

import {
  ButtonSize,
  ButtonStyle,
  ValdeButtonComponent,
} from './valde-button.component';

import * as results from '../../../../../.jest-test-results.json';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'shared/components/ValdeButton',
  component: ValdeButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      options: Object.keys(ButtonSize),
      mapping: ButtonSize,
      control: {
        type: 'select',
        labels: {
          small: 'Small',
          medium: 'Medium',
          large: 'Large',
        },
      },
    },
    buttonStyle: {
      options: Object.keys(ButtonStyle),
      mapping: ButtonStyle,
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          success: 'Success',
          danger: 'Danger',
          warning: 'Warning',
          info: 'Info',
          light: 'Light',
          dark: 'Dark',
          link: 'Link',
        },
      },
    },
  },
  decorators: [withTests({ results })],
  parameters: { jest: ['valde-button.component.test.ts'] },
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
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    source: {
      code: '<app-valde-button label="Primary"></app-valde-button>',
      language: 'typescript',
      type: 'auto',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonStyle: ButtonStyle.Secondary,
  label: 'Secondary',
  size: ButtonSize.Medium,
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    source: {
      code: '<app-valde-button label="Secondary" [buttonStyle]="ButtonStyle.Secondary"></app-valde-button>',
      language: 'typescript',
      type: 'auto',
    },
  },
};

export const LargeSuccess = Template.bind({});
LargeSuccess.args = {
  buttonStyle: ButtonStyle.Success,
  label: 'Large',
  size: ButtonSize.Large,
};
LargeSuccess.parameters = {
  ...LargeSuccess.parameters,
  docs: {
    source: {
      code: '<app-valde-button label="Large" [size]="ButtonSize.Large" [buttonStyle]="ButtonStyle.Success"></app-valde-button>',
      language: 'typescript',
      type: 'auto',
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  buttonStyle: ButtonStyle.Danger,
  label: 'Small',
  size: ButtonSize.Small,
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    source: {
      code: '<app-valde-button label="Small" [size]="ButtonSize.Small" [buttonStyle]="ButtonStyle.Danger"></app-valde-button>',
      language: 'typescript',
      type: 'auto',
    },
  },
};

export const Outline = Template.bind({});
Outline.args = {
  buttonStyle: ButtonStyle.Warning,
  label: 'Outline',
  outline: true,
  size: ButtonSize.Medium,
};
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    source: {
      code: '<app-valde-button label="Outline" [size]="ButtonSize.Medium" [buttonStyle]="ButtonStyle.Warning" [outline]="true"></app-valde-button>',
      language: 'typescript',
      type: 'auto',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonStyle: ButtonStyle.Primary,
  disabled: true,
  label: 'Disabled',
  size: ButtonSize.Medium,
};
Disabled.storyName = 'Disable Button Primary';
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    source: {
      code: '<app-valde-button label="Disabled" [disabled]="true"></app-valde-button>',
      language: 'javascript',
      type: 'auto',
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  buttonStyle: ButtonStyle.Primary,
  icon: 'card-image',
  label: 'Icon',
  size: ButtonSize.Medium,
};
Icon.parameters = {
  ...Icon.parameters,
  docs: {
    source: {
      code: '<app-valde-button label="Icon" icon="card-image" [size]="ButtonSize.Medium" [buttonStyle]="ButtonStyle.Primary"></app-valde-button>',
      language: 'typescript',
      type: 'auto',
    },
  },
};
