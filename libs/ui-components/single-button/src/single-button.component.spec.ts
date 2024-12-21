import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import {
  ButtonSize,
  ButtonStyle,
  SingleButtonComponent,
} from './single-button.component';
import { NgClass } from '@angular/common';

describe('GIVEN SingleButtonComponent', () => {
  let fixture: ComponentFixture<SingleButtonComponent>;
  let container: HTMLElement;
  let component:SingleButtonComponent;
  const inputs: any = {};

  describe('WHEN uses button by default', () => {
    beforeEach(async () => {
      const { fixture: componentFixture, container: componentContainer } = await setup(inputs);
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('THEN button is enabled', () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      expect(button?.disabled).toBeFalsy();
    });

    it('THEN button is primary by default', () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      expect(button?.className as string).toBe('btn btn-primary');
    });

    it('THEN by default has the Label text', () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      expect((button?.textContent as string).trim()).toEqual('Label');
    });

    it('THEN icon is not shown', () => {
      const icon = container.querySelector('.bi') as HTMLButtonElement;
      expect(icon).toBeNull();
    });

    it('THEN the type of the button is `button`', () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      expect(button?.type).toBe('button');
    });
  });

  describe('WHEN set the size of the bottom', () => {
    describe('AND the size is `Large`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ size: ButtonSize.Large });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the `btn-lg` class', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-lg');
      });
    });

    describe('AND the size is `Small`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ size: ButtonSize.Small });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the `btn-sm` class', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-sm');
      });
    });

    describe('AND the size is `Medium`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ size: ButtonSize.Medium });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button does not have the `btn-sm` or `btn-lg` classes', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).not.toContain('btn-sm');
        expect(button?.className as string).not.toContain('btn-lg');
      });
    });
  });

  describe('WHEN set a new label', () => {
    beforeEach(async () => {
      const { fixture: componentFixture, container: componentContainer } = await setup({ label: 'New Label' });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
    });

    it('THEN the label of the button to `New Label`', () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      expect((button?.textContent as string).trim()).toEqual('New Label');
    });
  });

  describe('WHEN the button is disabled', () => {
    beforeEach(async () => {
      const { fixture: componentFixture, container: componentContainer } = await setup({ disabled: true });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
    });

    it('THEN the button is disabled', () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      expect(button?.disabled).toBeTruthy();
    });
  });

  describe('WHEN set the Outline style', () => {
    beforeEach(async () => {
      const { fixture: componentFixture, container: componentContainer } = await setup({ outline: true });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
    });

    it('THEN the button has the `btn-outline-primary` class', () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      expect(button?.className as string).toContain('btn-outline-primary');
    });
  });

  describe('WHEN change the style', () => {
    describe('AND the style is `Danger`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ buttonStyle: ButtonStyle.Danger });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
      });

      it('THEN the button has the class `btn-danger`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-danger');
      });
    });

    describe('AND is outline and style is `Danger`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({
          outline: true,
          buttonStyle: ButtonStyle.Danger
        });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the class `btn-outline-danger`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-outline-danger');
      });
    });

    describe('AND the style is `Dark`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ buttonStyle: ButtonStyle.Dark });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
      });

      it('THEN the button has the class `btn-dark`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-dark');
      });
    });

    describe('AND is outline and style is `Dark`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({
          outline: true,
          buttonStyle: ButtonStyle.Dark
        });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the class `btn-outline-dark`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-outline-dark');
      });
    });

    describe('AND the style is `Info`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ buttonStyle: ButtonStyle.Info });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
      });

      it('THEN button has the class `btn-info`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-info');
      });
    });

    describe('AND is outline and style is `Info`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({
          outline: true,
          buttonStyle: ButtonStyle.Info
        });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the class `btn-outline-info`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-outline-info');
      });
    });

    describe('AND the style is `Link`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ buttonStyle: ButtonStyle.Link });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
      });

      it('THEN button has the class `btn-link`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-link');
      });
    });

    describe('AND is outline and style is `Link`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({
          outline: true,
          buttonStyle: ButtonStyle.Link
        });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the class `btn-outline-link`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-outline-link');
      });
    });

    describe('AND the style is `Warning`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ buttonStyle: ButtonStyle.Warning });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
      });

      it('THEN button has the class `btn-waring`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-warning');
      });
    });

    describe('AND is outline and style is `Warning`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({
          outline: true,
          buttonStyle: ButtonStyle.Warning
        });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the class `btn-outline-warning`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-outline-warning');
      });
    });

    describe('AND the style is `Light`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ buttonStyle: ButtonStyle.Light });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
      });

      it('THEN button has the class `btn-light`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-light');
      });
    });

    describe('AND is outline and style is `Light`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({
          outline: true,
          buttonStyle: ButtonStyle.Light
        });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the class `btn-outline-light`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-outline-light');
      });
    });

    describe('AND the style is `Success`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ buttonStyle: ButtonStyle.Success });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
      });

      it('THEN button has the class `btn-success`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-success');
      });
    });

    describe('AND is outline and style is `Success`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({
          outline: true,
          buttonStyle: ButtonStyle.Success
        });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the class `btn-outline-success`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.className as string).toContain('btn-outline-success');
      });
    });
  });

  describe('WHEN the button has an icon', () => {
    beforeEach(async () => {
      const { fixture: componentFixture, container: componentContainer } = await setup({ icon: 'check' });
      fixture = componentFixture;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
    });

    it('THEN the button has the icon', () => {
      const icon = container.querySelector('.bi') as HTMLButtonElement;
      expect(icon).toBeTruthy();
      expect(icon.className ).toContain('bi-check');
    });
  });

  describe('WHEN set the type of the button', () => {
    describe('AND the value is `submit`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ type: 'submit' });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the type `submit`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.type as string).toContain('submit');
      });
    });

    describe('AND the value is `reset`', () => {
      beforeEach(async () => {
        const { fixture: componentFixture, container: componentContainer } = await setup({ type: 'reset' });
        fixture = componentFixture;
        container = componentContainer as HTMLElement;
        fixture.detectChanges();
      });

      it('THEN the button has the type `reset`', () => {
        const button = container.querySelector('button') as HTMLButtonElement;
        expect(button?.type as string).toContain('reset');
      });
    });
  });

  describe('WHEN click on the button', () => {
    beforeEach(async () => {
      const { fixture: componentFixture, container: componentContainer } = await setup();
      fixture = componentFixture;
      component = fixture.componentInstance;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();
    });

    it('click on the button call the function of the send the event', async () => {
      const button = container.querySelector('button') as HTMLButtonElement;
      const mockCallBack = jest.spyOn(component.handleClick, 'emit');
      await userEvent.click(button);
      fixture.detectChanges();
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  describe('WHEN call to the focus method', () => {
    let spy: jest.SpyInstance;
    beforeEach(async () => {
      const { fixture: componentFixture, container: componentContainer } = await setup();
      fixture = componentFixture;
      component = fixture.componentInstance;
      container = componentContainer as HTMLElement;
      fixture.detectChanges();

      const button = container.querySelector('button') as HTMLButtonElement;
      spy = jest.spyOn(button, 'focus');
      component.focus();
      fixture.detectChanges();
    });

    it('THEN the button has the focus', () => {
      expect(spy).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

});

const setup = async (inputs: any = {}, outputs: any = {})  => {
  const renderResult = await render(SingleButtonComponent, {
    inputs: { ...inputs },
    on: { ...outputs },
    declarations: [],
    imports: [NgClass],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });

  const {fixture, container} = renderResult;
  return {fixture, container};
};
