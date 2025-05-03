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
        const reservas = resp.map((item: Reserva) => ({
          id: item.id,
          fechaCreada: item.fechaCreada,
          fechaReserva: item.fechaReserva,
          total: item.total,
          servicioId: item.servicioId,
          horaId: item.horaId,
          clienteId: item.clienteId
        }));
        this.reservas.update((list) => [...list, ...reservas]);

      });
      console.log(this.reservas());
      return this.reservas();
  }
}
