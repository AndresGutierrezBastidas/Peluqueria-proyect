import { Component, output, EventEmitter, input, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'modal-reserva-hora',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './modal-reserva-hora.component.html',
  styleUrl: './modal-reserva-hora.component.css',
})
export class ModalReservaHoraComponent {

  /* Variables para el modal */
  isVisible = input<boolean>();
  close = output<void>();

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

  professionals: any[] = [{
    id: 1,
    nombre: 'Juan Perez',
  }, {
    id: 2,
    nombre: 'Maria Lopez',
  }, {
    id: 3,
    nombre: 'Carlos Sanchez',
  },{
    id: 4,
    nombre: 'Miguel Perez',
  }, {
    id: 5,
    nombre: 'Ana Torres',
  }, {
    id: 6,
    nombre: 'Joaquin Valdebenito',
  }];

  // Horarios disponibles
  times = [ '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '13:00 PM', '14:00 PM', '14:30 PM', '15:00 PM', '16:00 PM', '16:30 PM', '17:00 PM', '18:00 PM', '18:30 PM'];

  // Estado del calendario y seleccion
  showCalendar = false;
  selectedDate = signal(Temporal); // Fecha actual en formato YYYY-MM-DD
  selectedTime: string | null = null;

  // Metodos
  toggleCalendar(){
    this.showCalendar = !this.showCalendar;
  }

  onDateChange(event: Event){
    const input = event.target as HTMLInputElement;
    console.log(input.value); 
    this.selectedDate.update(date => new Date(input.value));
    /* console.log('Fecha seleccionada:', this.selectedDate); */
    this.showCalendar = false;
  }

  selectTime(time: string){
    this.selectedTime = time;
  }

  closeModal() {
    this.close.emit();
  }

  nextStep() {
    console.log('Fecha seleccionada:', this.selectedDate);
    console.log('Hora seleccionada:', this.selectedTime);
  }

  carruselIzquierda(){

  }

  carruselDerecha(){

  }

}
