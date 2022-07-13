import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  @Input() value!: unknown;

  private isValid = true;
  public valueToShow: any = '';
  public valueOld: any = '';
  public valueTemporal: any = '';

  ngOnChanges(changes: SimpleChanges): void {
    const { value } = changes;

    if (value?.currentValue) {
      this.valueToShow = value.currentValue;
      this.valueOld = value.currentValue;
    }
  }

  onKeyupNumbers(event: KeyboardEvent): void {
    if (this.isEscPressed(event)) {
      this.restoreValues();
    } else {
      const target = event.target as HTMLInputElement;
      this.isValid = target?.validity?.valid;
      if (this.isValid) {
        this.valueTemporal = target.valueAsNumber;
        this.valueToShow = target.valueAsNumber;
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
      this.valueToShow = target.value;
    }
    console.warn({
      temporal: this.valueTemporal,
      old: this.valueOld,
      toShow: this.valueToShow,
    });
  }

  private isEscPressed(event: KeyboardEvent): boolean {
    return event?.code === 'Escape';
  }

  private restoreValues() {
    this.valueToShow = this.valueOld;
    this.valueTemporal = '';
  }
}
