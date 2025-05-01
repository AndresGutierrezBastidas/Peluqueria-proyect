import { Servicio } from '@interfaces/servicio.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { tap } from 'rxjs';
import { adapter } from '@adapter/commonAdapter';

@Injectable({
  providedIn: 'root',
})
export class ServiciosLandingService {
  
  http = inject(HttpClient);
  url = 'http://localhost:3000/api/services';

  servicios = signal<Servicio[]>([]);

  obtenerServicios(){
    this.http.get<Servicio[]>(`${this.url}/getServices`).subscribe((resp:Servicio[]) => {
      const servicios = adapter(resp)


      this.servicios.update((list) => [
        ...list,...servicios
      ]);
    });
    return this.servicios();
  }


  crearServicio(servicio:Servicio){
    this.http.post<Servicio>('http://localhost:3000/api/services/createServices',servicio).pipe(
      tap( (item:Servicio) => this.servicios.update((list) => [...list,item])),
    ).subscribe(
      resp => {
        return console.log(resp);
      }
    )
  }


}
