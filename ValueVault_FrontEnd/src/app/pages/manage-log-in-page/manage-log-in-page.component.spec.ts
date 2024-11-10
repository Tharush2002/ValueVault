import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLogInPageComponent } from './manage-log-in-page.component';

describe('ManageLogInPageComponent', () => {
  let component: ManageLogInPageComponent;
  let fixture: ComponentFixture<ManageLogInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageLogInPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageLogInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
