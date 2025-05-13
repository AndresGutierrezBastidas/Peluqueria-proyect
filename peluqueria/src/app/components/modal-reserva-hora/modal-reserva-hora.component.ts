import { Component, output, EventEmitter, input, signal, inject} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from './primer-paso/calendar/calendar.component';
import { HorasComponent } from './primer-paso/horas/horas.component';
import { ProfesionalesComponent } from './primer-paso/profesionales/profesionales.component';
import { DatePipe } from '@angular/common';
import { DatosServicioComponent } from './segundo-paso/datos-servicio/datos-servicio.component';
import { FormDatosComponent } from './segundo-paso/form-datos/form-datos.component';
import { ModalServiceService } from '@servicios/landingServices/modal-services/modal-service.service';

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
  close = output<void>();
  pasoActual: number = 1;

  /* Mostrar fecha escogida */
  date = signal<Date>(new Date());
  hora = signal<string>('');

  /* Profesional y servicio */
  profesional = signal<any>(null);

  /* Form reserva */
  reservaForm = new FormGroup({
    formPrimerPaso: new FormGroup({
      fechaReserva: new FormControl<string>('',Validators.required),
      horaReserva: new FormControl<string>('', Validators.required),
      profesional: new FormControl<any>(null , Validators.required)
    }),
    formSegundoPaso: new FormGroup({
      nombre: new FormControl<string>('', Validators.required),
      apellido: new FormControl<string>('', Validators.required),
      telefono: new FormControl<number>(0 ,Validators.required),
      correo: new FormControl<string>('', [Validators.required, Validators.email]),
    })
  })

  onDateSelected(date: Date){
    this.date.set(date);
    console.log(date);
    this.reservaForm.get('formPrimerPaso.fechaReserva')?.setValue(this.date().toLocaleString('es-CL'));
  }

  selectedHour(hora: string){
    this.hora.set(hora);
    this.reservaForm.get('formPrimerPaso.horaReserva')?.setValue(this.hora());
  }

  selectedProf(profesional: any){
    this.profesional.set(profesional);
    this.reservaForm.get('formPrimerPaso.profesional')?.setValue(this.profesional());
  }

  nextStep() {
    if (this.reservaForm.get('formPrimerPaso')?.status === 'VALID'){
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
    console.log('Reserva confirmada');
  }
}
