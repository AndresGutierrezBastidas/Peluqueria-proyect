import { adapterReserva } from '@adapter/commonAdapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Reserva, ReservaMiguel } from '@interfaces/reserva.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//Manu y Miguel coordinar para el manejo de los servicio

//[✅] obtener reserva
//[✅] crear reserva
export class ReservaServiceService {
  constructor() {
    this.obtenerReservas();
  }

  httpClient = inject(HttpClient);
  urlServer = 'http://localhost:3000/api/reserva';
  reservas = signal<Reserva[]>([]);
  http = inject(HttpClient);

//servicios para lo relacionado con las reservas
//obtener reserva -> retorna todas las reservas
//miguel encargado ser manejar el servicio de reserva
obtenerReservas(): void {
  this.httpClient.get<any[]>(`${this.urlServer}/getReserva`).subscribe((resp) => {
    const reservas = adapterReserva(resp); // Ahora sí se transformará correctamente
    this.reservas.update((list) => [...list, ...reservas]);
    console.log(reservas); // Verás la estructura plana que defines en tu interfaz
  });
}

//crear reserva asignado manu
  crearReserva(reserva: any){
      this.httpClient.post(`${this.urlServer}/postReserva`,reserva)
      .subscribe({
        next: (resp: any) => {
          console.log('Reserva creada:', resp);
        },
        error: (err) => {
          console.error('HTTP error occurred:', err);
        },
      });
  }
}
