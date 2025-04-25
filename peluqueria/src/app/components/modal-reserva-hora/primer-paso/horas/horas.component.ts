<<<<<<< HEAD
import { Component, output, signal } from '@angular/core';
=======
import { Component, output } from '@angular/core';
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c

@Component({
  selector: 'horas',
  imports: [],
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css'
})
export class HorasComponent {
<<<<<<< HEAD
  selectedTime = signal<string>('');
=======
  selectedTime: string = '';
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c
  hora = output<string>();

  // Horarios disponibles
  times = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '13:00 PM', '14:00 PM', '14:30 PM', '15:00 PM', '16:00 PM', '16:30 PM', '17:00 PM', '18:00 PM', '18:30 PM'];

  selectTime(time: string) {
<<<<<<< HEAD
    this.selectedTime.set(time);
    this.hora.emit(this.selectedTime());
=======
    this.selectedTime = time;
    this.hora.emit(this.selectedTime);
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c
  }
}
