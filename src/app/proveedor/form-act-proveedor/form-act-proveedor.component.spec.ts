import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActProveedorComponent } from './form-act-proveedor.component';

describe('FormActProveedorComponent', () => {
  let component: FormActProveedorComponent;
  let fixture: ComponentFixture<FormActProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormActProveedorComponent]
    });
    fixture = TestBed.createComponent(FormActProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
