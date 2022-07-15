import { Component } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  onValueChanged(value: unknown): void {
    if (typeof value === 'number') {
      console.info({ number: value });
    } else if (typeof value === 'string') {
      console.info({ string: value });
    } else {
      console.info({ unknow: value });
    }
  }
}
