import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { ValdeLoginComponent } from './valde-login.component';

describe('ValdeLoginComponent', () => {
  let component: ValdeLoginComponent;
  let fixture: ComponentFixture<ValdeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(ValdeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ValdeLoginComponent Testing Library', () => {
  // This is an integration test because depends on ValdeFormField.
  it('should created with all components', async () => {
    await render(ValdeLoginComponent);
    const usernameInput = screen.getByTestId('loginUsernameInput');
    const passwordInput = screen.getByTestId('loginPasswordInput');
    const resetButton = screen.getByTestId('loginResetButton');
    const loginButton = screen.getByTestId('loginLoginButton');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(resetButton).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  // This is an integration test because depends on ValdeFormField.
  it('should show error if inputs are empty', async () => {
    await render(ValdeLoginComponent, {});
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

  // This is an integration test because depends on ValdeFormField.
  it('should show error if `password` input is empty', async () => {
    await render(ValdeLoginComponent, {});

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

  // This is an integration test because depends on ValdeFormField.
  it('should show error if `username` input is empty', async () => {
    await render(ValdeLoginComponent, {});

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

  // This is an integration test because depends on ValdeFormField.
  it('should not show error if inputs are filled', async () => {
    await render(ValdeLoginComponent, {});

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

  // This is an integration test because depends on ValdeFormField.
  it('should not show inputs filled if click on reset button', async () => {
    await render(ValdeLoginComponent, {});

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
