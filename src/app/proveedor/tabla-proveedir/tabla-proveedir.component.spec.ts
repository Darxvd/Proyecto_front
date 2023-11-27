import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProveedirComponent } from './tabla-proveedir.component';

describe('TablaProveedirComponent', () => {
  let component: TablaProveedirComponent;
  let fixture: ComponentFixture<TablaProveedirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaProveedirComponent]
    });
    fixture = TestBed.createComponent(TablaProveedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
