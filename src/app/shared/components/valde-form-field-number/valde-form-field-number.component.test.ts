import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ValdeFormFieldNumberComponent } from './valde-form-field-number.component';

describe('ValdeFormFieldComponent', () => {
  let component: ValdeFormFieldNumberComponent;
  let fixture: ComponentFixture<ValdeFormFieldNumberComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValdeFormFieldNumberComponent],
    }).compileComponents();

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
});
