import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { adapter } from '@adapter/commonAdapter';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {

  constructor() {
    this.obtenerProfesionales();
  }

  http = inject(HttpClient);
  private url = 'http://localhost:3000/api/profesionales';
  profesionales = signal<Profesional[]>([]);

  obtenerProfesionales(){
    this.http.get<Profesional[]>(`${this.url}/getProf`).subscribe((resp: Profesional[]) => {
        const profesionales = adapter(resp)
        this.profesionales.set([])
        this.profesionales.update((lista) => [...lista, ...profesionales]);
      });

  }
  
  obtenerProfService(id: number): Observable<Profesional[]>{
    return this.http.get<Profesional[]>(`${this.url}/getPS/${id}`);
  }
}
