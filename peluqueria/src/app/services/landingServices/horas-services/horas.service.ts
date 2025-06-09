import { adapter } from '@adapter/commonAdapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { Reserva } from '@interfaces/reserva.interface';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  private apiUrl = 'http://localhost:3000/api/hours';

  private urlReserva = 'http://localhost:3000/api/reserva';
  private http = inject(HttpClient);
  

  getHoras(): Observable<Horas[]> {
    return this.http.get<Horas[]>(`${this.apiUrl}/getHours`);
  } 


  obtenerReservasPorFecha(fecha: Date): Observable<Horas[]> {
    if (!(fecha instanceof Date) || isNaN(fecha.getTime())) {
      return throwError(() => new Error('Invalid date provided'));
    }
  // Create a date-only string in local time (avoids timezone issues)
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    return this.http.get<Horas[]>(`${this.urlReserva}/getReservasPorFecha/${dateStr}`)
  }

}
