import { Servicio } from './../../../interfaces/servicio.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosLandingService {
  constructor() {}

  http = inject(HttpClient);
  url = 'http://localhost:3000/api/services';

  servicios = signal<Servicio[]>([]);

  obtenerServicios():Servicio[]{
    this.http.get(`${this.url}/getServices`).subscribe((resp:any) => {
      const servicios = resp.map((item:Servicio) => (
        {
          descripcion: item.descripcion,
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          profesionalId: item.profesionalId
        })
      )
      

      this.servicios.update((list) => [
        ...list,...servicios
      ]);
    });
    console.log(this.servicios());
    return this.servicios();
  }
}
