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
  protected username!: string;
  protected usernameError!: string;
  protected password!: string;
  protected passwordError!: string;

  protected ButtonSize = ButtonSize;
  protected ButtonStyle = ButtonStyle;

  onUsernameValueChanged(username: unknown): void {
    this.username = username as string;
  }

  onPasswordValueChanged(password: unknown): void {
    this.password = password as string;
    console.log(this.password);
  }

  reset(): void {
    this.username = '';
    this.password = '';
    this.usernameError = '';
    this.passwordError = '';

    console.log(this.password);
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
