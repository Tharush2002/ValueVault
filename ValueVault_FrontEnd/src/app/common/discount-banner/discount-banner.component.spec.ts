import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountBanner1Component } from './discount-banner.component';

describe('DiscountBanner1Component', () => {
  let component: DiscountBanner1Component;
  let fixture: ComponentFixture<DiscountBanner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountBanner1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountBanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
