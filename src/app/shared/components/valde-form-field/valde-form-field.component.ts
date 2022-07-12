import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valde-form-field',
  templateUrl: './valde-form-field.component.html',
  styleUrls: ['./valde-form-field.component.scss'],
})
export class ValdeFormFieldComponent {
  /**
   * This property indicate if the field is disabled or not.
   */
  @Input() disabled = false;

  /**
   * The identificator of the field
   * @required
   */
  @Input() id = '';
  /**
   * The identification text of the field
   */
  @Input() label = 'Label';

  /**
   * Text to show when the field is empty.
   */
  @Input() placeholder = '';

  /**
   * This property indicate if the field is readonly or not.
   */
  @Input() readonly = false;

  @Input() type:
    | 'text'
    | 'number'
    | 'email'
    | 'file'
    | 'image'
    | 'password'
    | 'color'
    | 'date'
    | 'tel'
    | 'time'
    | 'url'
    | 'datetime-local' = 'text';

  /**
   * This input is only used if the component is type number, that indicates te step of the spin.
   */
  @Input() step = 1;
}
