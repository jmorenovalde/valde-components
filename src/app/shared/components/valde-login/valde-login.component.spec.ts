import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getAllByTestId, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ValdeButtonComponent } from '../valde-button/valde-button.component';

import { ValdeButtonModule } from '../valde-button/valde-button.module';
import { ValdeFormFieldComponent } from '../valde-form-field/valde-form-field.component';
import { ValdeFormFieldModule } from '../valde-form-field/valde-form-field.module';

import { ValdeLoginComponent } from './valde-login.component';
import { ValdeLoginModule } from './valde-login.module';

describe('ValdeLoginComponent', () => {
  let component: ValdeLoginComponent;
  let fixture: ComponentFixture<ValdeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValdeLoginComponent],
      imports: [ValdeButtonModule, ValdeFormFieldModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ValdeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ValdeLoginComponent Testing Library', () => {
  it('should created with all components', async () => {
    await render(ValdeLoginComponent, {
      imports: [ValdeLoginModule],
    });
    const usernameInput = screen.getByTestId('loginUsernameInput');
    const passwordInput = screen.getByTestId('loginPasswordInput');
    const resetButton = screen.getByTestId('loginResetButton');
    const loginButton = screen.getByTestId('loginLoginButton');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(resetButton).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it('should show error if inputs are empty', async () => {
    await render(ValdeLoginComponent, {
      imports: [ValdeButtonModule, ValdeFormFieldModule],
      declarations: [ValdeButtonComponent, ValdeFormFieldComponent],
    });
    const logins = screen.getAllByText(/Login/i);
    const loginButton = logins.find(
      (item) => item instanceof HTMLButtonElement
    );
    if (loginButton) {
      userEvent.click(loginButton);

      const error = screen.getAllByTestId('inputError');
      expect(error.length).toEqual(2);
    }
  });

  it('should show error if `password` input is empty', async () => {
    await render(ValdeLoginComponent, {
      imports: [ValdeButtonModule, ValdeFormFieldModule],
      declarations: [ValdeButtonComponent, ValdeFormFieldComponent],
    });

    const usernameInput = screen.getByTestId('username');
    userEvent.type(usernameInput, '1234');

    const logins = screen.getAllByText('Login');
    const loginButton = logins.find(
      (item) => item instanceof HTMLButtonElement
    );
    if (loginButton) {
      userEvent.click(loginButton);

      const errors = screen.getAllByTestId('inputError');
      expect(errors.length).toEqual(1);
    }
  });

  it('should show error if `username` input is empty', async () => {
    await render(ValdeLoginComponent, {
      imports: [ValdeButtonModule, ValdeFormFieldModule],
      declarations: [ValdeButtonComponent, ValdeFormFieldComponent],
    });

    const passwordInput = screen.getByTestId('password');
    userEvent.type(passwordInput, '1234');

    const logins = screen.getAllByText('Login');
    const loginButton = logins.find(
      (item) => item instanceof HTMLButtonElement
    );
    if (loginButton) {
      userEvent.click(loginButton);

      const errors = screen.getAllByTestId('inputError');
      expect(errors.length).toEqual(1);
    }
  });

  it('should not show error if inputs are filled', async () => {
    await render(ValdeLoginComponent, {
      imports: [ValdeButtonModule, ValdeFormFieldModule],
      declarations: [ValdeButtonComponent, ValdeFormFieldComponent],
    });

    const usernameInput = screen.getByTestId('username');
    userEvent.type(usernameInput, '1234');

    const passwordInput = screen.getByTestId('password');
    userEvent.type(passwordInput, '1234');

    const logins = screen.getAllByText('Login');
    const loginButton = logins.find(
      (item) => item instanceof HTMLButtonElement
    );
    if (loginButton) {
      userEvent.click(loginButton);

      const errors = screen.queryAllByTestId('inputError');
      expect(errors.length).toEqual(0);
    }
  });

  it('should not show inputs filled if click on reset button', async () => {
    await render(ValdeLoginComponent, {
      imports: [ValdeButtonModule, ValdeFormFieldModule],
      declarations: [ValdeButtonComponent, ValdeFormFieldComponent],
    });

    const usernameInput = screen.getByTestId('username');
    userEvent.type(usernameInput, '1234');

    const passwordInput = screen.getByTestId('password');
    userEvent.type(passwordInput, '1234');

    const resets = screen.getAllByText('Reset');
    const resetButton = resets.find(
      (item) => item instanceof HTMLButtonElement
    );
    if (resetButton) {
      userEvent.click(resetButton);

      expect((usernameInput as any).value).toBe('');
      expect((passwordInput as any).value).toBe('');
    }
  });
});
