import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  input,
  output,
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
   * @default 'Label'
   */
  readonly label = input<string>('Label');

  /**
   * The size of the button
   * @default 'medium'
   */
  readonly size = input<ButtonSize>(ButtonSize.Medium);

  /**
   * The style to show the button.
   * @default 'primary'
   */
  readonly buttonStyle = input<ButtonStyle>(ButtonStyle.Primary);

  /**
   * This property is used to disable the button.
   * @default false
   */
  readonly disabled = input<boolean>(false);

  /**
   * The style outline to show the button.
   * @default false
   */
  readonly outline = input<boolean>(false);

  /**
   * @optional
   * Icon to show before label. The icon is the string of the style of the icon from [bootstrap-icons](https://icons.getbootstrap.com/).
   *
   * @example tho show the alarm icon, on the bootstrap-icon page you can see the next code `<i class="bi bi-alarm"></i>`, to show the alarm icon set icon to `alarm`.
   */
  readonly icon = input<string>('');

  /**
   * The type of button. Default value is button, but can use as submit or reset.
   * @default 'button'
   */
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  /**
   * Optional click handler
   */
  handleClick = output<Event>();

  /**
   * Set the focus on the button.
   */
  focus(): void {
    if (this.button) {
      this.button.nativeElement.focus();
    }
  }

  /**
   * @ignore
   * This function will fire the event handleClick on the click over the button.
   * @param event The event object that is fired.
   */
  protected clicked(event: Event): void {
    this.handleClick.emit(event);
  }
}
