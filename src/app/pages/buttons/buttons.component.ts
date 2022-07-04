import { Component } from '@angular/core';
import {
  ButtonSize,
  ButtonStyle,
} from '@shared/components/valde-button/valde-button.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  public ButtonStyle = ButtonStyle;
  public ButtonSize = ButtonSize;
}
