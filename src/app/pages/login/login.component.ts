import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ValdeLoginComponent } from '@shared/components/valde-login/valde-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ValdeLoginComponent],
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {}
