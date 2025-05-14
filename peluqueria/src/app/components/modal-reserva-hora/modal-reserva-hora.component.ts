import { Component, output, EventEmitter, input} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from './primer-paso/calendar/calendar.component';
import { HorasComponent } from './primer-paso/horas/horas.component';
import { ProfesionalesComponent } from './primer-paso/profesionales/profesionales.component';
import { DatePipe } from '@angular/common';
import { DatosServicioComponent } from './segundo-paso/datos-servicio/datos-servicio.component';
import { FormDatosComponent } from './segundo-paso/form-datos/form-datos.component';

@Component({
  selector: 'modal-reserva-hora',
  imports: [ReactiveFormsModule,FormsModule,CalendarComponent,
    HorasComponent,ProfesionalesComponent,DatePipe,
  DatosServicioComponent,FormDatosComponent],
  templateUrl: './modal-reserva-hora.component.html',
  styleUrl: './modal-reserva-hora.component.css'
})

export class ModalReservaHoraComponent {

  /* Variables para el modal */
  isVisible = input<boolean>();
  close = output<void>();
  pasoActual: number = 1;

  /* Mostrar fecha escogida */
  date: Date = new Date();
  hora: string = '';

  /* Profesional y servicio */
  profesional: any = null;

  /* Form reserva */
  reservaForm = new FormGroup({
    fechaReserva: new FormControl(Date,Validators.required),
    horaReserva: new FormControl('', Validators.required),
  })

  /* Form Cliente */
  clienteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
  })

  onDateSelected(date: Date){
    this.date = date;
  }
  
  selectedHour(hora: string){
    this.hora = hora;
  }

  selectedProf(profesional: any){
    this.profesional = profesional;
  }

  nextStep() {
    this.pasoActual++;
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
