import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from './pages/buttons/buttons.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { FormFieldComponent } from './pages/form-field/form-field.component';
import { FormFieldModule } from './pages/form-field/form-field.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ButtonsModule,
    FormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
