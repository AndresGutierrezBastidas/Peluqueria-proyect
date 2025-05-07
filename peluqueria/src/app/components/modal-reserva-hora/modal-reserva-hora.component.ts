import { Component, output, input, signal, inject} from '@angular/core';
import { CalendarComponent } from './primer-paso/calendar/calendar.component';
import { HorasComponent } from './primer-paso/horas/horas.component';
import { ProfesionalesComponent } from './primer-paso/profesionales/profesionales.component';
import { DatosServicioComponent } from './segundo-paso/datos-servicio/datos-servicio.component';
import { FormDatosComponent } from './segundo-paso/form-datos/form-datos.component';
import { ModalServiceService } from '@servicios/landingServices/modal-services/modal-service.service';
import { Profesional } from '@interfaces/profesionales.interface';
import { Horas } from '@interfaces/horas.interface';

@Component({
  selector: 'modal-reserva-hora',
  imports: [CalendarComponent,HorasComponent,ProfesionalesComponent,
    DatosServicioComponent,FormDatosComponent],
  templateUrl: './modal-reserva-hora.component.html',
  styleUrl: './modal-reserva-hora.component.css'
})
export class ModalReservaHoraComponent {
  /* Servicios Injectados */
  modalService = inject(ModalServiceService);

  /* Variables para el modal */
  isVisible = input<boolean>();
  serviceId = input.required<number>()
  close = output<void>();
  pasoActual: number = 1;

  /* Datos FS */
  dataFS = signal<[Date , Horas , Profesional ]>([new Date, {id: NaN, hora: ''} , {id: NaN, nombre: ''} ]);
  valid = signal(this.modalService.form.get('FS')?.valid);

  selectedData(data: any, i: number){  
    this.dataFS.update((prev) => {
      if(i === 0) return [data, prev[1], prev[2]];
      if(i === 1) return [prev[0], data, prev[2]];
      if(i === 2) return [prev[0], prev[1], data];
      return [prev[0], prev[1], prev[2]];
    });
    
    if(this.dataFS()[0] !== new Date && !isNaN(this.dataFS()[1].id) && !isNaN(this.dataFS()[2].id)){
      this.modalService.form.get('FS')?.setValue({
        profesional: this.dataFS()[2],
        horas: this.dataFS()[1],
        dia: this.dataFS()[0]
      })
      this.valid.set(this.modalService.form.get('FS')?.valid)
    }
  }

  nextStep() {    
    if (this.modalService.form.get('FS')?.valid){
      this.pasoActual++;
    }
  }

  closeModal() {
      this.close.emit();
  }

  previousStep() {
    this.pasoActual--;
  }

  confirmar(){
    if(this.modalService.form.get('SS')?.valid){
      this.modalService.crearReserva();
      console.log('Reserva confirmada');
    }
    console.log('Reserva no confirmada');
  }
}
