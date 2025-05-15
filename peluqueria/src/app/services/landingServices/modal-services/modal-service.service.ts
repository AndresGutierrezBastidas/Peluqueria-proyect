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
      telefono: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  })

  crearReserva(service: any){
    if(this.form.get('FS')?.valid && this.form.get('SS')?.valid){
      const dataCliente = {
        nombre: this.form.get('SS')?.value.nombre,
        apellido: this.form.get('SS')?.value.apellido,
        email: this.form.get('SS')?.value.email
      }

      const dataReserva = {
        fechaReserva: this.form.get('FS')?.value.dia,
        total: service.precio,
        servicioId: service.id,
        clienteId: 1,
        horaId: this.form.get('FS')?.value.horas?.id
      }
      console.log(JSON.stringify(dataReserva));
      
      this.reservaS.crearReserva(dataReserva);
    }
  }
}
