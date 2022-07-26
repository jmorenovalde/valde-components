import { DebugElement, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { fireEvent, render, screen } from '@testing-library/angular';
import { ValdeFormFieldComponent } from './valde-form-field.component';
import userEvent from '@testing-library/user-event';

describe('ValdeFormFieldComponent', () => {
  let component: ValdeFormFieldComponent;
  let fixture: ComponentFixture<ValdeFormFieldComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValdeFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValdeFormFieldComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.type as string).toContain('text');
  });

  it('should show the input value if this is valid', () => {
    const inputValue = 'This is a sample';

    component.value = inputValue;
    component.ngOnChanges({
      value: new SimpleChange(null, component.value, true),
    });
    fixture.detectChanges();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.value).toEqual(inputValue);
  });

  it('should call focus if the component call public focus', () => {
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as HTMLInputElement;
    const spy = jest.spyOn(input, 'focus');
    component.focus();
    expect(spy).toHaveBeenCalled();
  });

  it('change type to `file`', () => {
    component.type = 'file';
    fixture.detectChanges();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.type as string).toContain('file');
  });
});

describe('ValdeFormFieldComponent Testing Library', () => {
  it('should change value is typing is a valid value', async () => {
    await render(ValdeFormFieldComponent, {
      componentProperties: {
        id: 'inputLabelId',
      },
    });
    const input = screen.getByTestId('inputLabelId');
    fireEvent.change(input, { target: { value: 'test' } });
    expect((input as any).value).toBe('test');
  });

  it('should show value on type and focus out the component is value is valid', async () => {
    await render(ValdeFormFieldComponent, {
      componentProperties: {
        id: 'inputLabelId',
      },
    });
    const input = screen.getByTestId('inputLabelId');
    userEvent.type(input, 'test');
    userEvent.tab();
    expect((input as any).value).toBe('test');
  });

  it('should show the initial value if typing the `Escape key`', async () => {
    await render(ValdeFormFieldComponent, {
      componentProperties: {
        id: 'inputLabelId',
        value: 'test',
      },
    });
    const input = screen.getByTestId('inputLabelId');
    userEvent.type(input, ' new');
    userEvent.type(input, '{esc}');
    expect((input as any).value).toBe('test');
  });
});
