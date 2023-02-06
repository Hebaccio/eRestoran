import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirm2Component } from './order-confirm2.component';

describe('OrderConfirm2Component', () => {
  let component: OrderConfirm2Component;
  let fixture: ComponentFixture<OrderConfirm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConfirm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderConfirm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
