import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-valde-form-field-base',
  template: '',
})
export class ValdeFormFieldBase {
  @ViewChild('inputControl') inputControl!: ElementRef;

  /**
   * This property indicates if the field is disabled or not.
   */
  @Input() disabled = false;

  /**
   * The identification of the field
   * @required
   */
  @Input() id!: string;

  /**
   * The identification text of the field
   */
  @Input() label = 'Label';

  /**
   * Text to show when the field is empty.
   */
  @Input() placeholder!: string;

  /**
   * This property indicate if the field is readonly or not.
   */
  @Input() readonly = false;

  /**
   * initial value
   */
  @Input() value!: unknown;

  /**
   * This event emits when the value is changed or field lost focus.
   * @returns the value of the field.
   */
  @Output() valueChanged = new EventEmitter<unknown>();

  /** @ignore */
  protected valueToShow: any = '';

  /** @ignore */
  protected valueOld: unknown;

  /** @ignore */
  protected valueTemporal = '';

  /**
   * @ignore this is a private method
   *
   * This method return if key typed is the Escape key.
   */
  protected isEscPressed(event: KeyboardEvent): boolean {
    return event?.code === 'Escape';
  }

  /**
   * @ignore is a private method
   *
   * This method restore the old value and emit this value.
   */
  protected restoreValues() {
    this.valueToShow = this.valueOld;
    this.valueTemporal = this.valueOld as string;
    this.valueChanged.emit(this.valueOld);
  }
}
