import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { adapter } from '@adapter/commonAdapter';


@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  constructor() {

  }


  http = inject(HttpClient);
  url = 'http://localhost:3000/api/profesionales';
  profesionales = signal<Profesional[]>([]);

  obtenerProfesionales():Profesional[]{
    this.http
      .get<Profesional[]>(`${this.url}/getProf`)
      .subscribe((resp: Profesional[]) => {
        const profesionales = adapter(resp)
        this.profesionales.update((lista) => [...lista, ...profesionales]);
      });

      return this.profesionales()
  }
}
