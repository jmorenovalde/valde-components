import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

const MSG_NUMBER_INVALID = 'The value is not valid';

@Component({
  selector: 'app-valde-form-field',
  templateUrl: './valde-form-field.component.html',
  styleUrls: ['./valde-form-field.component.scss'],
})
export class ValdeFormFieldComponent implements OnChanges {
  /**
   * This property indicate if the field is disabled or not.
   */
  @Input() disabled = false;

  /**
   * The identificator of the field
   * @required
   */
  @Input() id!: string;

  /**
   * The identification text of the field
   */
  @Input() label = 'Label';

  /**
   * This input is only used if the component is type number, that indicates the min value.
   */
  @Input() min = Number.MIN_SAFE_INTEGER;

  /**
   * This input is only used if the component is type number, that indicates the maximun value.
   */
  @Input() max = Number.MAX_SAFE_INTEGER;

  /**
   * Text to show when the field is empty.
   */
  @Input() placeholder!: string;

  /**
   * This property indicate if the field is readonly or not.
   */
  @Input() readonly = false;

  /**
   * This input is only used if the component is type number, that indicates the step of the spin.
   */
  @Input() step = 1;

  /**
   * Show error on blur (false) or in real time (false)
   */
  @Input() showErrorOnBlur = true;

  /**
   * The type of the input.
   */
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
   * initial value
   */
  @Input() value!: unknown;

  /**
   * This event emits when the value is changed or field lost focus.
   * @returns the value of the field.
   */
  @Output() valueChanged = new EventEmitter<unknown>();

  /**
   * This event emits when the value has a error. This event emits according to showErrorOnBlur value.
   */
  @Output() valueHasError = new EventEmitter<string>();

  public valueToShow: any = '';
  public isValid = true;

  private valueOld: unknown;
  private valueTemporal = '';

  ngOnChanges(changes: SimpleChanges): void {
    const { value } = changes;
    if (value?.currentValue) {
      this.valueToShow = value.currentValue.toString();
      this.valueOld = value.currentValue;
      if (this.type === 'number') {
        this.isValid =
          !Number.isNaN(value.currentValue as string) &&
          Number.isFinite(Number(value.currentValue as string));
      }
    }
  }

  onBlurNumbers(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    this.isValid = target?.validity?.valid;
    if (this.isValid) {
      this.valueTemporal = target.valueAsNumber.toString();
      this.valueChanged.emit(target.valueAsNumber);
      this.valueHasError.emit(MSG_NUMBER_INVALID);
    }
  }

  onKeyupNumbers(event: KeyboardEvent): void {
    if (this.isEscPressed(event)) {
      this.restoreValues();
    } else {
      const target = event.target as HTMLInputElement;
      this.isValid = !this.showErrorOnBlur ? target?.validity?.valid : true;
      if (this.isValid) {
        this.valueTemporal = target.valueAsNumber.toString();
        this.valueChanged.emit(target.valueAsNumber);
      } else if (!this.isValid && !this.showErrorOnBlur) {
        this.valueHasError.emit(MSG_NUMBER_INVALID);
      }
    }
  }

  onKeyup(event: KeyboardEvent): void {
    if (this.isEscPressed(event)) {
      this.restoreValues();
    } else {
      const target = event.target as HTMLInputElement;
      this.isValid = true;
      this.valueTemporal = target.value;
      this.valueChanged.emit(target.value);
    }
  }

  onBlur(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    this.isValid = true;
    this.valueTemporal = target.value;
    this.valueChanged.emit(target.value);
  }

  private isEscPressed(event: KeyboardEvent): boolean {
    return event?.code === 'Escape';
  }

  private restoreValues() {
    this.valueToShow = this.valueOld;
    this.valueTemporal = this.valueOld as string;
    this.valueChanged.emit(this.valueOld);
  }
}
