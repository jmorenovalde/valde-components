import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValdeFormFieldModule } from '@shared/components/valde-form-field/valde-form-field.module';
import { FormFieldComponent } from './form-field.component';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [CommonModule, ValdeFormFieldModule],
})
export class FormFieldModule {}
