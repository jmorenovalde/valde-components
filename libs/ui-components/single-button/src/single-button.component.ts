import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

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
  selector: 'v-single-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './single-button.component.html',
})
export class SingleButtonComponent {
  @ViewChild('singleButton') button!: ElementRef;

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
   * The type of button. Default value is button, but can use as submit or reset.
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>();

  /**
   * Set the focus on the button.
   */
  public focus(): void {
    if (this.button) {
      this.button.nativeElement.focus();
    }
  }

  /**
   * @ignore
   * This function will fire the event onClick on the click over the button.
   * @param event The event object that is fired.
   */
  protected clicked(event: Event): void {
    this.onClick.next(event);
  }
}
