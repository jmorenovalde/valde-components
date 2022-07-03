import { Component, Input } from '@angular/core';

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
}
