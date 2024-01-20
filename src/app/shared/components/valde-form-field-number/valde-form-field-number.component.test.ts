import { DebugElement, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { ValdeFormFieldNumberComponent } from './valde-form-field-number.component';

describe('ValdeFormFieldNumberComponent', () => {
  let component: ValdeFormFieldNumberComponent;
  let fixture: ComponentFixture<ValdeFormFieldNumberComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(ValdeFormFieldNumberComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.type as string).toContain('number');
  });

  it('should show the input value if this is valid', () => {
    const inputValue = '5';

    component.value = 5;
    component.ngOnChanges({
      value: new SimpleChange(null, component.value, true),
    });
    fixture.detectChanges();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.value).toEqual(inputValue);
  });

  it('should not show any value on input if value is not valid', () => {
    const inputValueInvalid = '12e1234';
    component.value = inputValueInvalid;
    component.ngOnChanges({
      value: new SimpleChange(null, component.value, true),
    });
    fixture.detectChanges();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.value).toBe('');
  });

  it('should not show any value on input if value is not valid and is decimal', () => {
    const inputValueInvalid = '12e1234';
    component.value = inputValueInvalid;
    component.ngOnChanges({
      value: new SimpleChange(null, component.value, true),
    });
    fixture.detectChanges();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.value).toBe('');
  });

  it('should call focus if the component call public focus', () => {
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as HTMLInputElement;
    const spy = jest.spyOn(input, 'focus');
    component.focus();
    expect(spy).toHaveBeenCalled();
  });
});

describe('ValdeFormFieldNumberComponent Testing Library', () => {
  it('should change value is typing is a valid value', async () => {
    await render(ValdeFormFieldNumberComponent, {
      componentProperties: {
        id: 'numberLabelId',
        isInteger: true,
      },
    });
    const input = screen.getByTestId('numberLabelId');
    fireEvent.change(input, { target: { value: '23' } });
    expect((input as any).value).toBe('23');
  });

  it('should show value on type and focus out the component is value is valid', async () => {
    await render(ValdeFormFieldNumberComponent, {
      componentProperties: {
        id: 'numberLabelId',
        isInteger: true,
      },
    });
    const input = screen.getByTestId('numberLabelId');
    userEvent.type(input, '23');
    userEvent.tab();
    expect((input as any).value).toBe('23');
  });

  it('should show the initial value if typing the `Escape key`', async () => {
    await render(ValdeFormFieldNumberComponent, {
      componentProperties: {
        id: 'numberLabelId',
        isInteger: true,
        value: 23,
      },
    });
    const input = screen.getByTestId('numberLabelId');
    userEvent.type(input, '23');
    userEvent.type(input, '{esc}');
    expect((input as any).value).toBe('23');
  });

  it('should show invalid error message is input is integer and type a decimal value', async () => {
    await render(ValdeFormFieldNumberComponent, {
      componentProperties: {
        id: 'numberLabelId',
        isInteger: true,
      },
    });
    const input = screen.getByTestId('numberLabelId');
    fireEvent.change(input, { target: { value: '23.23' } });
    const error = screen.getByText('The number is not valid');
    expect(error).toBeTruthy();
  });

  it('should show invalid error message is input is not integer and type a invalid value and blur from the input', async () => {
    const {fixture} = await render(ValdeFormFieldNumberComponent, {
      componentProperties: {
        id: 'numberLabelId',
        isInteger: true,
      },
    });
    const input = screen.getByTestId('numberLabelId');
    userEvent.type(input, '12e1234');
    userEvent.tab();
    fixture.detectChanges();
    expect(await screen.findByText('The number is not valid')).toBeTruthy();
  });

  it('should show invalid error message is input is not integer and type a invalid value', async () => {
    await render(ValdeFormFieldNumberComponent, {
      componentProperties: {
        id: 'numberLabelId',
        isInteger: false,
        showErrorOnBlur: false,
      },
    });
    const input = screen.getByTestId('numberLabelId');
    fireEvent.focus(input);
    const keyboardState = userEvent.keyboard('{1},{2},{e},{1},{2},{3},{4}');
    expect((input as any).valueAsNumber).toBeNaN();
  });
});
