import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from '@shared/layout/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { FormFieldComponent } from './pages/form-field/form-field.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsComponent,
    FormFieldComponent,
    LoginComponent,
    MenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
