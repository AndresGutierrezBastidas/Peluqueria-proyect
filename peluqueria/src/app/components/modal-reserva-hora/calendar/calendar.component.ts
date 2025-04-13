import { DatePipe } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'calendar',
  imports: [DatePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  // Estado del calendario y seleccion
  showCalendar = false;
  selectedDate = signal(new Date().toLocaleDateString('es-Cl')); // Fecha actual en formato YYYY-MM-DD
  date = output<String>();

  // Metodos
  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  onDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    this.selectedDate.update(date => input.value);
    this.date.emit(this.selectedDate().toString());
    console.log('Fecha seleccionada:', this.selectedDate);
    this.showCalendar = false;
  }
}
