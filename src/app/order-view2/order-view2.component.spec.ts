import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderView2Component } from './order-view2.component';

describe('OrderView2Component', () => {
  let component: OrderView2Component;
  let fixture: ComponentFixture<OrderView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderView2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
