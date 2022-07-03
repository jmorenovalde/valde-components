import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdeButtonComponent } from './valde-button.component';

describe('ValdeButtonComponent', () => {
  let component: ValdeButtonComponent;
  let fixture: ComponentFixture<ValdeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValdeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValdeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
