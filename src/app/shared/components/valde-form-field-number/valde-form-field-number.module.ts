import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValdeFormFieldNumberComponent } from './valde-form-field-number.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ValdeFormFieldNumberComponent],
  exports: [ValdeFormFieldNumberComponent],
  imports: [CommonModule, FormsModule],
})
export class ValdeFormFieldNumberModule {}
