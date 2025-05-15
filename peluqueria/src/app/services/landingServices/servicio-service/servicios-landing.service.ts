import { Servicio } from '@interfaces/servicio.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { map, Observable, tap } from 'rxjs';
import { adapter } from '@adapter/commonAdapter';

@Injectable({
  providedIn: 'root',
})
export class ServiciosLandingService {
  //Miguel, Sebastian y manu (solo el obtener)
  //[❗] deben revisar para que los servicios conicidan con el sistema de obtener
  //[✅] obtener Servicios
  //[✅] obtener servicios por id
  //[✅] Crear servicios
  //[❌] editar Editar servicios
  constructor(){
    this.obtenerServicios();
  }

  http = inject(HttpClient);
  url = 'http://localhost:3000/api/services';

  servicios = signal<Map<number,Servicio>>(new Map());
  serviciosArray = signal<Servicio[]>([]);

  obtenerServicios():void{
    this.http.get<Servicio[]>(`${this.url}/getServices`)
    .pipe(
      map(resp => adapter(resp))
    ).
    subscribe((resp:Servicio[]) => {
      this.serviciosArray.set(resp);
      const nuevoMap = new Map<number, Servicio>();
      resp.forEach(serv => {
        if(serv.id){
          nuevoMap.set(serv.id,serv);
        }
      })
      this.servicios.set(nuevoMap);
    });
  }

  crearServicio(servicio: Servicio) {
    this.http.post<{id: number} & Servicio>('http://localhost:3000/api/services/createServices', servicio).pipe(
      tap((nuevoServicio) => {
        this.servicios.update((currentMap) =>
          currentMap.set(nuevoServicio.id, nuevoServicio)
        );
        this.serviciosArray.update(list => [...list, nuevoServicio]);
      })
    ).subscribe(resp => {
      console.log("servicio creado: "+ resp);
    });
  }

  obtenerServicioNombreId(id:number){
    return this.servicios().get(id)?.nombre;
  }
}