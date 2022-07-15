import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ValdeFormFieldComponent } from './valde-form-field.component';

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

  describe('type `number`', () => {
    beforeEach(() => {
      component.type = 'number';
      fixture.detectChanges();
    });

    it('change type to `number`', () => {
      const dEInput = el.query(By.css('input'));
      const input = dEInput.nativeElement as any;
      expect(input.type as string).toContain('number');
    });
  });

  it('change type to `file`', () => {
    component.type = 'file';
    fixture.detectChanges();
    const dEInput = el.query(By.css('input'));
    const input = dEInput.nativeElement as any;
    expect(input.type as string).toContain('file');
  });
});
