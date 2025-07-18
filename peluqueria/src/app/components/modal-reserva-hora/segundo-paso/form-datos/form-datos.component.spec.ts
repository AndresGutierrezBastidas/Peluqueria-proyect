import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatosComponent } from './form-datos.component';

describe('FormDatosComponent', () => {
  let component: FormDatosComponent;
  let fixture: ComponentFixture<FormDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
