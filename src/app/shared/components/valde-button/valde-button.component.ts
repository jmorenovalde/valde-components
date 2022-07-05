import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ButtonStyle {
  Danger = 'danger',
  Dark = 'dark',
  Info = 'info',
  Light = 'light',
  Link = 'link',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

@Component({
  selector: 'app-valde-button',
  templateUrl: './valde-button.component.html',
})
export class ValdeButtonComponent {
  /**
   * The label to show on the button.
   * @required
   */
  @Input() label = 'Label';

  /**
   * The size of the button
   */
  @Input() size = ButtonSize.Medium;

  /**
   * The style to show the button.
   */
  @Input() buttonStyle = ButtonStyle.Primary;

  /**
   * This property is used to disable the button.
   */
  @Input() disabled = false;

  /**
   * The style outlined
   */
  @Input() outline = false;

  /**
   * Icon to show before label. The icon is the string of the style of the icon from [bootstrap-icons](https://icons.getbootstrap.com/).
   *
   * @example tho show the alarm icon, on the bootstrap-icon page you can see the next code `<i class="bi bi-alarm"></i>`, to show the alarm icon set icon to `alarm`.
   */
  @Input() icon = '';

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>();

  /**
   * @ignore
   * This function will fire the event onClick on the click over the button.
   * @param event The event object that is fired.
   */
  public clicked(event: Event): void {
    this.onClick.next(event);
  }
}
