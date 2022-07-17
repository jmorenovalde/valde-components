import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValdeFormFieldModule } from '@shared/components/valde-form-field/valde-form-field.module';
import { FormFieldComponent } from './form-field.component';
import { ValdeFormFieldNumberModule } from '@shared/components/valde-form-field-number/valde-form-field-number.module';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [CommonModule, ValdeFormFieldModule, ValdeFormFieldNumberModule],
})
export class FormFieldModule {}
