import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingWelcomeComponent } from './landing-welcome.component';

describe('LandingWelcomeComponent', () => {
  let component: LandingWelcomeComponent;
  let fixture: ComponentFixture<LandingWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
