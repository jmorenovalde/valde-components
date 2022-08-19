import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ValdeLoginModule } from '@shared/components/valde-login/valde-login.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ValdeLoginModule],
})
export class LoginModule {}
