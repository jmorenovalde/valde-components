import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import {
  ButtonSize,
  ButtonStyle,
  ValdeButtonComponent,
} from './valde-button.component';

describe('ValdeButtonComponent', () => {
  let component: ValdeButtonComponent;
  let fixture: ComponentFixture<ValdeButtonComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValdeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValdeButtonComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;
    const icon = dEButton.query(By.css('.bi'));

    expect(component).toBeTruthy();
    expect(button.disabled).toBeFalsy();
    expect(icon).toBeFalsy();
    expect(button.className as string).toBe('btn btn-primary');
    expect((button.textContent as string).trim()).toEqual('Label');
  });

  it('create a `Large` button', () => {
    component.size = ButtonSize.Large;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-lg');
  });

  it('create a `Small` button', () => {
    component.size = ButtonSize.Small;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-sm');
  });

  it('change the label of the button to `New Label`', () => {
    component.label = 'New Label';
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect((button.textContent as string).trim()).toEqual('New Label');
  });

  it('change to Disable', () => {
    component.disabled = true;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.disabled).toBeTruthy();
  });

  it('change to Outline style', () => {
    component.outline = true;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-primary');
  });

  it('change to Outline style and Danger', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Danger;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-danger');
  });

  it('change to Outline style and Dark', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Dark;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-dark');
  });

  it('change to Outline style and Info', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Info;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-info');
  });

  it('change to Outline style and Light', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Light;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-light');
  });

  it('change to Outline style and Link', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Link;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-link');
  });

  it('change to Outline style and Success', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Success;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-success');
  });

  it('change to Outline style and Warning', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Warning;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-outline-warning');
  });

  it('change to button style to Danger', () => {
    component.buttonStyle = ButtonStyle.Danger;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-danger');
  });

  it('change to button style to Dark', () => {
    component.buttonStyle = ButtonStyle.Dark;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-dark');
  });

  it('change to button style to Info', () => {
    component.buttonStyle = ButtonStyle.Info;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-info');
  });

  it('change to button style to Light', () => {
    component.buttonStyle = ButtonStyle.Light;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-light');
  });

  it('change to button style to Link', () => {
    component.buttonStyle = ButtonStyle.Link;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-link');
  });

  it('change to button style to Success', () => {
    component.buttonStyle = ButtonStyle.Success;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-success');
  });

  it('change to button style to Warning', () => {
    component.buttonStyle = ButtonStyle.Warning;
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.className as string).toContain('btn-warning');
  });

  it('click on the button call the function of the send the event', fakeAsync(() => {
    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;
    const mockCallBack = jest.spyOn(component.onClick, 'next');

    button.click();
    flush();

    expect(mockCallBack.mock.calls.length).toEqual(1);
  }));

  it('add an icon to the button', () => {
    component.icon = 'check';
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const icon = dEButton.query(By.css('.bi'));

    expect(icon).toBeTruthy();
  });

  it('change type to `submit`', () => {
    component.type = 'submit';
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;
    expect(button.type as string).toContain('submit');
  });

  it('change type to `reset`', () => {
    component.type = 'reset';
    fixture.detectChanges();

    const dEButton = el.query(By.css('button'));
    const button = dEButton.nativeElement as any;

    expect(button.type as string).toContain('reset');
  });

  it('should call focus if the component call public focus', () => {
    const dEInput = el.query(By.css('button'));
    const button = dEInput.nativeElement as HTMLButtonElement;
    const spy = jest.spyOn(button, 'focus');
    component.focus();
    expect(spy).toHaveBeenCalled();
  });
});

describe('ValdeButton Testing Library', () => {
  test('should render Button', async () => {
    await render(ValdeButtonComponent, {
      componentProperties: { label: 'My button' },
    });

    expect(screen.getByText('My button')).toBeTruthy();
  });
});
