import { adapterReserva } from '@adapter/commonAdapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Reserva } from '@interfaces/reserva.interface';
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

  http = inject(HttpClient);
  url = 'http://localhost:3000/api/reserva';
  reservas = signal<Reserva[]>([]);
//servicios para lo relacionado con las reservas
//obtener reserva -> retorna todas las reservas
//miguel encargado ser manejar el servicio de reserva
obtenerReservas(): void {
  this.http.get<any[]>(`${this.url}/getReserva`).subscribe((resp) => {
    const reservas = adapterReserva(resp); // Ahora sí se transformará correctamente
    this.reservas.update((list) => [...list, ...reservas]);
    console.log(reservas); // Verás la estructura plana que defines en tu interfaz
  });
}
//crear reserva asignado manu
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
