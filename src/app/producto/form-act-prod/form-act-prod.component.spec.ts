import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActProdComponent } from './form-act-prod.component';

describe('FormActProdComponent', () => {
  let component: FormActProdComponent;
  let fixture: ComponentFixture<FormActProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormActProdComponent]
    });
    fixture = TestBed.createComponent(FormActProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
