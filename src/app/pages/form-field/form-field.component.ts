import { Component, ElementRef, ViewChild } from '@angular/core';
import { ValdeFormFieldNumberComponent } from '@shared/components/valde-form-field-number/valde-form-field-number.component';
import { ValdeFormFieldNumberModule } from '@shared/components/valde-form-field-number/valde-form-field-number.module';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  @ViewChild('inputNumber')
  inputNumber: ElementRef<ValdeFormFieldNumberComponent> = {} as ElementRef;

  protected textToFill = '';

  onValueChanged(value: unknown): void {
    if (typeof value === 'number') {
      console.info({ number: value });
    } else if (typeof value === 'string') {
      console.info({ string: value });
    } else {
      console.info({ unknown: value });
    }
  }

  onClickButtonGetFocus(): void {
    if (this.inputNumber) {
      const item: any = this.inputNumber;
      item.focus();
    }
  }

  onClickButtonFill(): void {
    this.textToFill = 'Text filled by code';
  }
}
