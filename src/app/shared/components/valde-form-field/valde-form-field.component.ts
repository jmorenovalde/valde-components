import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValdeFormFieldBase } from '../valde-form-field-base/valde-form-field-base';

const MSG_NUMBER_INVALID = 'The value is not valid';

@Component({
  selector: 'app-valde-form-field',
  templateUrl: './valde-form-field.component.html',
  styleUrls: ['./valde-form-field.component.scss'],
})
export class ValdeFormFieldComponent
  extends ValdeFormFieldBase
  implements OnChanges
{
  /**
   * Show error on blur (false) or in real time (false)
   */
  @Input() showErrorOnBlur = true;

  /**
   * The type of the input.
   */
  @Input() type:
    | 'text'
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

  protected isValid = true;

  /**
   * @ignore this is a component lifecycle hook method.
   */
  ngOnChanges(changes: SimpleChanges): void {
    const { value } = changes;
    if (value?.currentValue) {
      this.valueToShow = value.currentValue.toString();
      this.valueOld = value.currentValue;
    }
  }

  /**
   * @ignore This protected method will be used only by the component view.
   *
   * This method is fired when user is typing on the field.
   *
   * @param {KeyboardEvent} event the key that presses the user
   */
  protected onKeyup(event: KeyboardEvent): void {
    if (this.isEscPressed(event)) {
      this.restoreValues();
    } else {
      const target = event.target as HTMLInputElement;
      this.isValid = true;
      this.valueTemporal = target.value;
      this.valueChanged.emit(target.value);
    }
  }

  /**
   * @ignore This protected method will be used only by the component view.
   *
   * This method is fired when input lost the focus
   *
   * @param {Event} event the event that it is fired when the field lost the focus.
   */
  onBlur(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    this.isValid = true;
    this.valueTemporal = target.value;
    this.valueChanged.emit(target.value);
  }

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueTemporal = target.value;
    console.warn(this.valueTemporal);
  }
}
