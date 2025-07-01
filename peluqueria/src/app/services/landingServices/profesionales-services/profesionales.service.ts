import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { adapter } from '@adapter/commonAdapter';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
//Miguel, Sebastian y manu(solo obtener)
//[❗] deben revisar para que los servicios ocupen el mismo sistema de array
//[✅] obtener Profesionales
//[✅] obtener Profesionales por id
//[❌] crear Profesionales
//[❌] editar Profesionales
  http = inject(HttpClient);
  url = 'http://localhost:3000/api/profesionales';
  profesionales = signal<Profesional[]>([]);

  profesionalesMap = signal<Map<number, Profesional>>(new Map());

  profesionalesArray = signal<Profesional[]>([]);

  constructor() {
    this.obtenerProfesionales();
  }

  obtenerProfesionales():void{
    this.http.get<Profesional[]>(`${this.url}/`)
      .pipe(
        map(resp => adapter(resp))
      )
      .subscribe((profesionales: Profesional[]) => {
        this.profesionalesArray.set(profesionales);
        
        const nuevoMap = new Map<number, Profesional>();
        profesionales.forEach(prof => {
          if (prof.id != null) {
            nuevoMap.set(prof.id, prof);
          }
        });
        this.profesionalesMap.set(nuevoMap);
      });
  }

  getProfesionalById(id: number): Profesional | undefined {
    return this.profesionalesMap().get(id);
  }

  /* Profesionales del Servicio */
  getProfServicios(id: number): Observable<Profesional[]>{
    return this.http.get<Profesional[]>(`${this.url}/serviceProf/${id}`).pipe(
      tap((resp: Profesional[]) => {
        const profesionales = adapter(resp);
        this.profesionales.update((lista) => [...lista, ...profesionales])
      })
    )
  }

  addProfesional(Profesional : Profesional):Observable<Profesional>{
    const UrlPost = `${this.url}/addProfesional`;
    return this.http.post<Profesional>(UrlPost, Profesional)
  }
}
