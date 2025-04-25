<<<<<<< HEAD
import { Component, output, signal } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'calendar',
  imports: [MatDatepickerModule,MatCardModule],
  providers: [provideNativeDateAdapter()],
=======
import { DatePipe } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'calendar',
  imports: [DatePipe],
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
<<<<<<< HEAD
  // Envio de fechas seleccionadas
  selected = signal<Date>(new Date());
  date = output<Date>();

  onDateChange() {
    this.date.emit(this.selected());
=======
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
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c
  }
}
