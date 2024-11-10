import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionBannersComponent } from './call-to-action-banners.component';

describe('CallToActionBannersComponent', () => {
  let component: CallToActionBannersComponent;
  let fixture: ComponentFixture<CallToActionBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionBannersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallToActionBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
