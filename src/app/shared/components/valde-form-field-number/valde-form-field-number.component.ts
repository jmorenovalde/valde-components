import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ValdeFormFieldBase } from '../valde-form-field-base/valde-form-field-base';

const MSG_NUMBER_INVALID = 'The value is not valid';

@Component({
  selector: 'app-valde-form-field-number',
  templateUrl: './valde-form-field-number.component.html',
  styleUrls: ['./valde-form-field-number.component.scss'],
})
export class ValdeFormFieldNumberComponent
  extends ValdeFormFieldBase
  implements OnChanges
{
  /**
   * This property indicates that the number can't have decimal values.
   */
  @Input() isInteger = false;

  /**
   * This property indicates the min value.
   */
  @Input() min = Number.MIN_SAFE_INTEGER;

  /**
   * This property indicates the maximun value.
   */
  @Input() max = Number.MAX_SAFE_INTEGER;

  /**
   * This input indicates the step of the spin.
   */
  @Input() step = 1;

  /**
   * Show error on blur (true) or in real time (false)
   */
  @Input() showErrorOnBlur = true;

  /**
   * This event emits when the value has a error. This event emits according to showErrorOnBlur value.
   */
  @Output() valueHasError = new EventEmitter<string>();

  public isValid = true;

  /**
   * @ignore livecycle hook of angular component.
   */
  ngOnChanges(changes: SimpleChanges): void {
    const { value } = changes;
    if (value?.currentValue) {
      const isValid =
        !Number.isNaN(value.currentValue as string) &&
        Number.isFinite(Number(value.currentValue as string));
      if (isValid) {
        this.valueToShow = value.currentValue.toString();
        this.valueOld = value.currentValue;
      } else {
        this.restoreValues();
      }
    }
  }

  /**
   * @ignore This protected method will be used only by the component view.
   *
   * This methos is fired when input lost the focus
   *
   * @param {Event} event the event that it is fired when the field lost the focus.
   */
  protected onBlurNumbers(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    this.isValid = this.validateValue(this.isInteger, target);
    if (this.isValid) {
      this.valueTemporal = target.valueAsNumber.toString();
      this.valueChanged.emit(target.valueAsNumber);
    } else {
      this.valueHasError.emit(MSG_NUMBER_INVALID);
    }
  }

  /**
   * @ignore This protected method will be used only by the component view.
   *
   * This method is fired when user click on the spin to increase o decrease the value of the input.
   *
   * @param {Event} event the event that it is fired when the value of the field is changed.
   */
  protected onChangeNumbers(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isValid = target?.validity?.valid;
    if (this.isValid) {
      this.valueTemporal = target.valueAsNumber.toString();
      this.valueChanged.emit(target.valueAsNumber);
    } else {
      this.valueHasError.emit(MSG_NUMBER_INVALID);
    }
  }

  /**
   * @ignore This protected method will be used only by the component view.
   *
   * This method is fired when user is typing on the field.
   *
   * @param {KeyboardEvent} event the key that presses the user.
   */
  protected onKeyupNumbers(event: KeyboardEvent): void {
    if (this.isEscPressed(event)) {
      this.restoreValues();
    } else {
      const target = event.target as HTMLInputElement;
      const isValid = this.validateValue(this.isInteger, target);
      this.isValid = this.showErrorOnBlur ? true : isValid;
      if (isValid) {
        this.valueTemporal = target.valueAsNumber.toString();
        this.valueChanged.emit(target.valueAsNumber);
      }
      if (!this.showErrorOnBlur && !isValid) {
        this.valueHasError.emit(MSG_NUMBER_INVALID);
      }
    }
  }

  /**
   * @ignore this is a private method
   *
   * This method validate if the value es valid.
   */
  protected validateValue(
    isInteger: boolean,
    field: HTMLInputElement
  ): boolean {
    if (!isInteger) {
      return field.validity.valid;
    }
    const intValue = Number.parseInt(field.valueAsNumber.toString(), 10);
    return intValue === field.valueAsNumber;
  }
}
