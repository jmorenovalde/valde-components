import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonSize,
  ButtonStyle,
} from '../valde-button/valde-button.component';
import { ValdeButtonModule } from '../valde-button/valde-button.module';
import { ValdeFormFieldModule } from '../valde-form-field/valde-form-field.module';

@Component({
  selector: 'app-valde-login',
  standalone: true,
  imports: [CommonModule, ValdeFormFieldModule, ValdeButtonModule],
  templateUrl: './valde-login.component.html',
  styleUrls: ['./valde-login.component.scss'],
})
export class ValdeLoginComponent {
  protected username = '';
  protected usernameError = '';
  protected password = '';
  protected passwordError = '';

  protected ButtonSize = ButtonSize;
  protected ButtonStyle = ButtonStyle;

  onUsernameValueChanged(username: unknown): void {
    this.username = username as string;
  }

  onPasswordValueChanged(password: unknown): void {
    this.password = password as string;
  }

  reset(): void {
    this.username = '';
    this.password = '';
    this.usernameError = '';
    this.passwordError = '';
  }

  login(): void {
    this.usernameError = '';
    this.passwordError = '';

    if (this.username && this.password) {
      console.log({ username: this.username, password: this.password });
      return;
    }

    if (!this.username) {
      this.usernameError = 'This field is required';
    }

    if (!this.password) {
      this.passwordError = 'This field is required';
    }
  }
}
