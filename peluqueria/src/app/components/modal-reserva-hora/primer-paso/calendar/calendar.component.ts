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
  selectedDate = signal(new Date());
  date = output<Date>();

  onDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const dateString = input.value; // "YYYY-MM-DD"
    // Convierte a Date (sin usar toLocaleDateString) ["2002", "12", "04"]
    const date = new Date(dateString.replace(/-/g, '/'));

    this.selectedDate.update(() => date); // Guarda como Date
    this.date.emit(date); // Emite la fecha seleccionada
    this.showCalendar = false;
  }
}
