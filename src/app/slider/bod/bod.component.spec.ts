import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodComponent } from './bod.component';

describe('BodComponent', () => {
  let component: BodComponent;
  let fixture: ComponentFixture<BodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodComponent]
    });
    fixture = TestBed.createComponent(BodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
