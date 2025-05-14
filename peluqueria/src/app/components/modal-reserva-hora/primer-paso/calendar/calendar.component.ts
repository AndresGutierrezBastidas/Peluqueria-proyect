import { Component, output, signal } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'calendar',
  imports: [MatDatepickerModule,MatCardModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  // Envio de fechas seleccionadas
  selected = signal<Date>(new Date());
  date = output<Date>();

  onDateChange() {
    this.date.emit(this.selected());
  }
}
