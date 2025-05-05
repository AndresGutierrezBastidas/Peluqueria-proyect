import {  inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fsInterface, ssInterface } from '@interfaces/forms.interface';
import { ReservaServiceService } from '../reserva-service/reserva-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private reservaS = inject(ReservaServiceService);

  form = new FormGroup({
    FS: new FormGroup<fsInterface>({
      profesional: new FormControl( null, Validators.required),
      dia: new FormControl(null,Validators.required),
      horas: new FormControl(null, Validators.required)
    }),
    SS: new FormGroup<ssInterface>({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl(NaN, [Validators.required, Validators.minLength(8)])
    })
  })

  crearReserva(){
    console.log('se creo la reserva');
  }
}
