import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservaHoraComponent } from './modal-reserva-hora.component';

describe('ModalReservaHoraComponent', () => {
  let component: ModalReservaHoraComponent;
  let fixture: ComponentFixture<ModalReservaHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReservaHoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReservaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
