import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActClienteComponent } from './form-act-cliente.component';

describe('FormActClienteComponent', () => {
  let component: FormActClienteComponent;
  let fixture: ComponentFixture<FormActClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormActClienteComponent]
    });
    fixture = TestBed.createComponent(FormActClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
