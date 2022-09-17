import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValdeFormFieldBase } from '../valde-form-field-base/valde-form-field-base';

const MSG_NUMBER_INVALID = 'The value is not valid';

@Component({
  selector: 'app-valde-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valde-form-field.component.html',
  styleUrls: ['../valde-form-field-base/valde-form-field-base.scss'],
})
export class ValdeFormFieldComponent
  extends ValdeFormFieldBase
  implements OnChanges
{
  /**
   * Show error message.
   */
  @Input() msgError = '';

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
    if (value?.currentValue != null) {
      this.valueToShow = value.currentValue.toString();
      this.valueOld = value.currentValue;
    }
  }

  /**
   * Set the focus on the inputControl.
   */
  public focus(): void {
    if (this.inputControl) {
      this.inputControl.nativeElement.focus();
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
   * This method is fired when user change of the input.
   *
   * @param {Event} event the event that it is fired when the value of the field is changed.
   */
  protected onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isValid = target?.validity?.valid;
    if (this.isValid) {
      this.valueTemporal = target.value;
      this.valueChanged.emit(target.value);
    }
  }

  /**
   * @ignore This protected method will be used only by the component view.
   *
   * This method is fired when input lost the focus
   *
   * @param {Event} event the event that is fired when the field lost the focus.
   */
  protected onBlur(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    this.isValid = true;
    this.valueTemporal = target.value;
    this.valueChanged.emit(target.value);
  }

  /**
   * @ignore This protected method will be used only by the component view.
   *
   * This method is fired when input select a file.
   *
   * @param {Event} event the event that is fired when a file is selected.
   */
  protected onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueTemporal = target.value;
    this.valueChanged.emit(target.value);
  }
}
