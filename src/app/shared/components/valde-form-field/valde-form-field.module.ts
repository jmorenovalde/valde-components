import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValdeFormFieldComponent } from './valde-form-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ValdeFormFieldComponent],
  exports: [ValdeFormFieldComponent],
  imports: [CommonModule, FormsModule],
})
export class ValdeFormFieldModule {}
