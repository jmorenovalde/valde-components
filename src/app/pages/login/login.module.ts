import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ValdeLoginComponent } from '@shared/components/valde-login/valde-login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ValdeLoginComponent],
})
export class LoginModule {}
