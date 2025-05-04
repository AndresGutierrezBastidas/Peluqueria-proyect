import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { adapter } from '@adapter/commonAdapter';
import { map, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {


  http = inject(HttpClient);
  url = 'http://localhost:3000/api/profesionales';
  profesionales = signal<Profesional[]>([]);

  // profesionales.service.ts
  obtenerProfesionales(): Observable<Profesional[]> {
    return this.http.get<Profesional[]>(`${this.url}/getProf`).pipe(
      tap((resp: Profesional[]) => {
        const profesionales = adapter(resp);
        this.profesionales.update((lista) => [...lista, ...profesionales]);
      })
    );
  }
}
