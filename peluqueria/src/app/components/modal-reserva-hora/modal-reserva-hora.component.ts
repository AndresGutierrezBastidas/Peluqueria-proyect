import { Component, output, EventEmitter, input} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { HorasComponent } from './horas/horas.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';

@Component({
  selector: 'modal-reserva-hora',
  imports: [ReactiveFormsModule,FormsModule,CalendarComponent,HorasComponent,ProfesionalesComponent],
  templateUrl: './modal-reserva-hora.component.html',
  styleUrl: './modal-reserva-hora.component.css'
})

export class ModalReservaHoraComponent {

  /* Variables para el modal */
  isVisible = input<boolean>();
  close = output<void>();
  date: Date | null = new Date();

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

  closeModal() {
    this.close.emit();
  }

  nextStep() {

  }
}
