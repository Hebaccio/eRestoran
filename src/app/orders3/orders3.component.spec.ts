import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orders3Component } from './orders3.component';

describe('Orders3Component', () => {
  let component: Orders3Component;
  let fixture: ComponentFixture<Orders3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orders3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orders3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
