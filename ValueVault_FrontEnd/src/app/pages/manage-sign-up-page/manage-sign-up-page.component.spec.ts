import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSignUpPageComponent } from './manage-sign-up-page.component';

describe('ManageSignUpPageComponent', () => {
  let component: ManageSignUpPageComponent;
  let fixture: ComponentFixture<ManageSignUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSignUpPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
