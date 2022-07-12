import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdeFormFieldComponent } from './valde-form-field.component';

describe('ValdeFormFieldComponent', () => {
  let component: ValdeFormFieldComponent;
  let fixture: ComponentFixture<ValdeFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValdeFormFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValdeFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
