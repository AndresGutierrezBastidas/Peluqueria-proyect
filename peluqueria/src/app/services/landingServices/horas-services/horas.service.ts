import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Manu

//[✅] obtener horas
//[❌] crear horas
//[❌] editar horas


export class HorasService {

  private apiUrl = 'http://localhost:3000/api/hours';

  private urlReserva = 'http://localhost:3000/api/reserva';
  private http = inject(HttpClient);
  

  //obtener horas desde las base de datos funcion de manu
  getHoras(): Observable<Horas[]> {
    return this.http.get<Horas[]>(`${this.apiUrl}/getHours`);
  } 


  obtenerReservasPorFecha(fecha: Date, id: number): Observable<Horas[]> {
    if (!(fecha instanceof Date) || isNaN(fecha.getTime())) {
      return throwError(() => new Error('Fecha inválida'));
    }

    if(isNaN(id) && !id){
       return throwError(() => new Error('Id no es un número'));
    }
  // Create a date-only string in local time (avoids timezone issues)
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    return this.http.get<Horas[]>(`${this.urlReserva}/getReservasPorFecha/${dateStr}/${id}`)
  }

}
