import { Component, output, input, signal, inject} from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from './primer-paso/calendar/calendar.component';
import { HorasComponent } from './primer-paso/horas/horas.component';
import { ProfesionalesComponent } from './primer-paso/profesionales/profesionales.component';
import { DatePipe } from '@angular/common';
import { DatosServicioComponent } from './segundo-paso/datos-servicio/datos-servicio.component';
import { FormDatosComponent } from './segundo-paso/form-datos/form-datos.component';
import { ModalServiceService } from '@servicios/landingServices/modal-services/modal-service.service';
import { Profesional } from '@interfaces/profesionales.interface';

@Component({
  selector: 'modal-reserva-hora',
  imports: [ReactiveFormsModule,FormsModule,CalendarComponent,
    HorasComponent,ProfesionalesComponent,DatePipe,
  DatosServicioComponent,FormDatosComponent],
  templateUrl: './modal-reserva-hora.component.html',
  styleUrl: './modal-reserva-hora.component.css'
})
export class ModalReservaHoraComponent {
  /* Servicios Injectados */
  private modalService = inject(ModalServiceService);

  /* Variables para el modal */
  isVisible = input<boolean>();
  service = input.required<any>();
  close = output<void>();
  pasoActual: number = 1;

  /* Datos FS */
  dataFS = signal<[Date, string, Profesional] | null>(null);

  selectedData(data: any){
    
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
