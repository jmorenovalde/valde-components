import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonSize,
  ButtonStyle,
  ValdeButtonComponent,
} from '@shared/components/valde-button/valde-button.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, ValdeButtonComponent],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  public ButtonStyle = ButtonStyle;
  public ButtonSize = ButtonSize;
}
