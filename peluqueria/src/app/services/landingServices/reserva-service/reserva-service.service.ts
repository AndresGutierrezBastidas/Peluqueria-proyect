import { adapter } from '@adapter/commonAdapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Reserva } from '@interfaces/reserva.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservaServiceService {
  constructor() {}

  http = inject(HttpClient);
  url = 'http://localhost:3000/api/reserva';
  reservas = signal<Reserva[]>([]);

  obtenerReservas(): Reserva[] {
    this.http
      .get<Reserva[]>(`${this.url}/getReserva`)
      .subscribe((resp: Reserva[]) => {
        const reservas = adapter(resp)
        this.reservas.update((list) => [...list, ...reservas]);

      });
      console.log(this.reservas());
      return this.reservas();
  }

  crearReserva(reserva: any){
      this.http.post(`${this.url}/postReserva`,reserva)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          if (resp.error) {
            console.log(resp.error);
            return;
          } else {
            this.obtenerReservas();
          }
        },
        error: (err) => {
          console.error('HTTP error occurred:', err);
        },
      });
  }
}
