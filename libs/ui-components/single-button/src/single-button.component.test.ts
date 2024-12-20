import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render } from '@testing-library/angular';

import {
  ButtonSize,
  ButtonStyle,
  SingleButtonComponent,
} from './single-button.component';

describe('GIVEN SingleButtonComponent', () => {
  let component: SingleButtonComponent;
  let fixture: ComponentFixture<SingleButtonComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    const { fixture: componentFixture } = await setup();
    fixture = componentFixture;
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('WHEN uses button by default', () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('THEN button is enabled', () => {
      const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
      expect(button?.disabled).toBeFalsy();
    });

    it('THEN button is primary by default', () => {
      const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
      expect(button?.className as string).toBe('btn btn-primary');
    });

    it('THEN by default has the Label text', () => {
      const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
      expect((button?.textContent as string).trim()).toEqual('Label');
    });

    it('THEN icon is not shown', () => {
      const icon = el.query(By.css('button'))?.query(By.css('.bi'));
      expect(icon).toBeNull();
    });
  });

  it('create a `Large` button', () => {
    component.size = ButtonSize.Large;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-lg');
  });

  it('create a `Small` button', () => {
    component.size = ButtonSize.Small;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-sm');
  });

  it('change the label of the button to `New Label`', () => {
    component.label = 'New Label';
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect((button?.textContent as string).trim()).toEqual('New Label');
  });

  it('change to Disable', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.disabled).toBeTruthy();
  });

  it('change to Outline style', () => {
    component.outline = true;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-primary');
  });

  it('change to Outline style and Danger', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Danger;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-danger');
  });

  it('change to Outline style and Dark', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Dark;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-dark');
  });

  it('change to Outline style and Info', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Info;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-info');
  });

  it('change to Outline style and Light', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Light;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-light');
  });

  it('change to Outline style and Link', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Link;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-link');
  });

  it('change to Outline style and Success', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Success;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-success');
  });

  it('change to Outline style and Warning', () => {
    component.outline = true;
    component.buttonStyle = ButtonStyle.Warning;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-outline-warning');
  });

  it('change to button style to Danger', () => {
    component.buttonStyle = ButtonStyle.Danger;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-danger');
  });

  it('change to button style to Dark', () => {
    component.buttonStyle = ButtonStyle.Dark;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-dark');
  });

  it('change to button style to Info', () => {
    component.buttonStyle = ButtonStyle.Info;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-info');
  });

  it('change to button style to Light', () => {
    component.buttonStyle = ButtonStyle.Light;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-light');
  });

  it('change to button style to Link', () => {
    component.buttonStyle = ButtonStyle.Link;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-link');
  });

  it('change to button style to Success', () => {
    component.buttonStyle = ButtonStyle.Success;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-success');
  });

  it('change to button style to Warning', () => {
    component.buttonStyle = ButtonStyle.Warning;
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.className as string).toContain('btn-warning');
  });

  it('click on the button call the function of the send the event', () => {
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    const mockCallBack = jest.spyOn(component.onClick, 'next');
    button?.click();
    fixture.detectChanges();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('add an icon to the button', () => {
    component.icon = 'check';
    fixture.detectChanges();
    const icon = el.query(By.css('button'))?.query(By.css('.bi'));
    expect(icon).toBeTruthy();
  });

  it('change type to `submit`', () => {
    component.type = 'submit';
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.type as string).toContain('submit');
  });

  it('change type to `reset`', () => {
    component.type = 'reset';
    fixture.detectChanges();
    const button = el.query(By.css('button'))?.nativeElement as HTMLButtonElement;
    expect(button?.type as string).toContain('reset');
  });

  it('should call focus if the component call public focus', () => {
    const dEInput = el.query(By.css('button'));
    const button = dEInput.nativeElement as HTMLButtonElement;
    const spy = jest.spyOn(button, 'focus');
    component.focus();
    expect(spy).toHaveBeenCalled();
  });
});

// describe('ValdeButton Testing Library', () => {
//   it('should render Button', async () => {
//     await render(SingleButtonComponent, {
//       componentProperties: { label: 'My button' },
//     });

//     expect(screen.getByText('My button')).toBeTruthy();
//   });
// });

const setup = async (properties = {})  => {
  const renderResult = await render(SingleButtonComponent, {
    componentProperties: properties,
  });

  const {fixture, container} = renderResult;
  return {fixture, container};
};
