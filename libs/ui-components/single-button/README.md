# @valde/ui-components/single-button

Configurable button to use as a button.

## inputs

- **label**: the label to show on the button. By default has the `Label` text
- **size**: the size of the button. The value is by the enum `ButtonSize` (Large, Medium and Small). By default is `Medium`.
- **buttonStyle**: the style of the button. The value is by the enum `ButtonStyle` (Danger, Dark, Info, Light, Link, Primary, Secondary, Success, Warning). By default is `Primary`.
- **disabled**: if we need that the button is disabled, set to `true`.
- **outline**: the outline style button. To enable it set it to `true`.
- **icon**: shows the icon that we set on the text (bootstrap icon).
- **type**: the type of the button (button, submit or reset). By default is `button`.

## output

- handleClick: if the button is clicked and return the same event as the button.

## methods

- focus: this methods will be called outside of the button to set the focus on the button.
