import { Component } from '@angular/core';
import {
  ButtonSize,
  ButtonStyle,
} from '../valde-button/valde-button.component';

@Component({
  selector: 'app-valde-login',
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
    console.warn(this.username);
  }

  onPasswordValueChanged(password: unknown): void {
    this.password = password as string;
  }

  reset(): void {
    this.username = '';
    this.password = '';
    this.usernameError = '';
    this.passwordError = '';
    console.log(this.username);
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
