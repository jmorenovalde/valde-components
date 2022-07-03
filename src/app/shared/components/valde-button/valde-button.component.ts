import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
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
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * The style to show the button.
   */
  @Input() buttonStyle:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link' = 'primary';

  /**
   * This property is used to disable the button.
   */
  @Input() disabled = false;

  /**
   * The style outlined
   */
  @Input() outline = false;

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>();
}
