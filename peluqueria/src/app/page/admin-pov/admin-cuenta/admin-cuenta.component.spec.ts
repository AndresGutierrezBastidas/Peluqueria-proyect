import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuentaComponent } from './admin-cuenta.component';

describe('AdminCuentaComponent', () => {
  let component: AdminCuentaComponent;
  let fixture: ComponentFixture<AdminCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
