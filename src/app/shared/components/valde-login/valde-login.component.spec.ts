import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValdeButtonModule } from '../valde-button/valde-button.module';
import { ValdeFormFieldModule } from '../valde-form-field/valde-form-field.module';

import { ValdeLoginComponent } from './valde-login.component';

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
