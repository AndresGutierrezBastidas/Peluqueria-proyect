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
      nombre: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
      apellido: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)])
    })
  })

  crearReserva(service: any){
    if(this.form.get('FS')?.valid && this.form.get('SS')?.valid){
      const data = {"reserva" : {
        fechaReserva: this.form.get('FS')?.value.dia?.toISOString(),
        total: Number(service.precio),
        servicioId: Number(service.id),
        horaId: this.form.get('FS')?.value.horas?.id
      },
      "cliente" : {
        nombre: this.form.get('SS')?.value.nombre,
        apellido: this.form.get('SS')?.value.apellido,
        email: this.form.get('SS')?.value.email,  
      }}
      console.log(data);
      
      this.reservaS.crearReserva(data);
    }
  }
}
