import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { ValdeButtonModule } from '@shared/components/valde-button/valde-button.module';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule, ValdeButtonModule],
})
export class ButtonsModule {}
