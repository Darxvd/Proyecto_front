import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActComponent } from './form-act.component';

describe('FormActComponent', () => {
  let component: FormActComponent;
  let fixture: ComponentFixture<FormActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormActComponent]
    });
    fixture = TestBed.createComponent(FormActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
