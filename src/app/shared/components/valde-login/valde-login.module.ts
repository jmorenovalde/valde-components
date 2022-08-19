import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValdeLoginComponent } from './valde-login.component';
import { ValdeFormFieldModule } from '../valde-form-field/valde-form-field.module';
import { ValdeButtonModule } from '../valde-button/valde-button.module';

@NgModule({
  declarations: [ValdeLoginComponent],
  exports: [ValdeLoginComponent],
  imports: [CommonModule, ValdeFormFieldModule, ValdeButtonModule],
})
export class ValdeLoginModule {}
