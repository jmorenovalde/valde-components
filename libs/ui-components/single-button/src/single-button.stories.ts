// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import {
  ButtonSize,
  ButtonStyle,
  SingleButtonComponent,
} from './single-button.component';

const meta: Meta<SingleButtonComponent> = {
  title: 'UI/Components/SingleButton',
  component: SingleButtonComponent,
  args: {
    buttonStyle: ButtonStyle.Primary,
    disabled: false,
    icon: '',
    label: 'Label',
    outline: false,
    size: ButtonSize.Medium,
    type: 'button',
    handleClick: action('clicked'),
  },

  argTypes: {
    buttonStyle: {
      options: Object.values(ButtonStyle),
      mapping: Object.keys(ButtonStyle),
      description: 'Set the style to the button. In this case we use bootstrap styles. (danger = `btn-danger`, dark = `btn-dark`, info = `btn-info`, light = `btn-light`, link = `btn-link`, primary = `btn-primary`, secondary = `btn-secondary`, success = `btn-success`, warning = `btn-warning`)',
      control: {
        type: 'select',
        labels: {
          danger: 'Danger',
          dark: 'Dark',
          info: 'Info',
          light: 'Light',
          link: 'Link',
          primary: 'Primary',
          secondary: 'Secondary',
          success: 'Success',
          warning: 'Warning',
        }
      },
      table: {
        category: 'input',
        defaultValue: { summary: ButtonStyle.Primary },
        subcategory: 'style',
      },
    },
    disabled: {
      description: 'If the button is disabled this property should be true',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'input',
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      description: "The icon to show inside the button. If you don't want to show an icon, you can leave this property empty",
      control: {
        type: 'text',
      },
      table: {
        category: 'input',
        defaultValue: { summary: '' },
      },
    },
    label: {
      description: 'The label to show inside the button',
      control: {
        type: 'text',
      },
      table: {
        category: 'input',
        defaultValue: { summary: 'Label' },
      },
    },
    outline: {
      description: 'This property will be set to true if the style of the button is outline',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'input',
        defaultValue: { summary: 'false' },
        subcategory: 'style',
      },
    },
    size: {
      description: 'Set the style of the button size. In this case we use bootstrap sizes. (small = `btn-sm`, medium = `nothing`, large = `btn-lg`)',
      options: Object.values(ButtonSize),
      mapping: Object.keys(ButtonSize),
      control: {
        type: 'select',
        labels: {
          small: 'Small',
          medium: 'Medium',
          large: 'Large',
        },
      },
      table: {
        category: 'input',
        defaultValue: { summary: ButtonSize.Medium },
        subcategory: 'style',
      },
    },
    type: {
      description: 'Set the type of the button. This property is used into the forms',
      control: {
        type: 'select',
      },
      options: [
        'button',
        'submit',
        'reset',
      ],
      table: {
        category: 'input',
        defaultValue: { summary: 'button' },
      },
    },
    handleClick: {
      action: 'clicked',
      description: 'Button click handler',
      table: {
        category: 'output',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SingleButtonComponent>;

export const Default: Story = {};

export const StyleDanger: Story = {
  args: {
    buttonStyle: ButtonStyle.Danger,
    label: 'Lorem ipsum',
  },
};

export const StyleDangerOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Danger,
    label: 'Lorem ipsum',
    outline: true,
  },
};

export const StyleDangerWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Danger,
    icon: 'fire',
    label: 'Lorem ipsum',
  },
};

export const StyleDangerDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Danger,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StyleDark: Story = {
  args: {
    buttonStyle: ButtonStyle.Dark,
    label: 'Lorem ipsum',
  },
};

export const StyleDarkOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Dark,
    label: 'Lorem ipsum',
    outline: true,
  },
};

export const StyleDarkWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Dark,
    label: 'Lorem ipsum',
    icon: 'fire'
  },
};

export const StyleDarkDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Dark,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StyleInfo: Story = {
  args: {
    buttonStyle: ButtonStyle.Info,
    label: 'Lorem ipsum',
  },
};

export const StyleInfoOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Info,
    label: 'Lorem ipsum',
    outline: true,
  },
};

export const StyleInfoWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Info,
    label: 'Lorem ipsum',
    icon: 'fire',
  },
};

export const StyleInfoDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Info,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StyleLight: Story = {
  args: {
    buttonStyle: ButtonStyle.Light,
    label: 'Lorem ipsum',
  },
};

export const StyleLightOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Light,
    label: 'Lorem ipsum',
    outline: true,
  },
};

export const StyleLightWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Light,
    label: 'Lorem ipsum',
    icon: 'fire',
  },
};

export const StyleLightDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Light,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StyleLink: Story = {
  args: {
    buttonStyle: ButtonStyle.Link,
    label: 'Lorem ipsum',
  },
};

export const StyleLinkOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Link,
    outline: true,
    label: 'Lorem ipsum',
  },
};

export const StyleLinkWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Link,
    icon: 'fire',
    label: 'Lorem ipsum',
  },
};

export const StyleLinkDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Link,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StylePrimary: Story = {
  args: {
    buttonStyle: ButtonStyle.Primary,
    label: 'Lorem ipsum',
  },
};

export const StylePrimaryOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Primary,
    outline: true,
    label: 'Lorem ipsum',
  },
};

export const StylePrimaryWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Primary,
    icon: 'fire',
    label: 'Lorem ipsum',
  },
};

export const StylePrimaryDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Primary,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StyleSecondary: Story = {
  args: {
    buttonStyle: ButtonStyle.Secondary,
    label: 'Lorem ipsum',
  },
};

export const StyleSecondaryOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Secondary,
    outline: true,
    label: 'Lorem ipsum',
  },
};

export const StyleSecondaryWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Secondary,
    icon: 'fire',
    label: 'Lorem ipsum',
  },
};

export const StyleSecondaryDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Secondary,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StyleSuccess: Story = {
  args: {
    buttonStyle: ButtonStyle.Success,
    label: 'Lorem ipsum',
  },
};

export const StyleSuccessOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Success,
    outline: true,
    label: 'Lorem ipsum',
  },
};

export const StyleSuccessWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Success,
    icon: 'fire',
    label: 'Lorem ipsum',
  },
};

export const StyleSuccessDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Success,
    disabled: true,
    label: 'Lorem ipsum',
  },
};

export const StyleWarning: Story = {
  args: {
    buttonStyle: ButtonStyle.Warning,
    label: 'Lorem ipsum',
  },
};

export const StyleWarningOutline: Story = {
  args: {
    buttonStyle: ButtonStyle.Warning,
    outline: true,
    label: 'Lorem ipsum',
  },
};

export const StyleWarningWithIcon: Story = {
  args: {
    buttonStyle: ButtonStyle.Warning,
    icon: 'fire',
    label: 'Lorem ipsum',
  },
};

export const StyleWarningDisabled: Story = {
  args: {
    buttonStyle: ButtonStyle.Warning,
    disabled: true,
    label: 'Lorem ipsum',
  },
};
