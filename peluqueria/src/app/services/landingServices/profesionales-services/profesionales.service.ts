import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

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
    this.http
      .get<Profesional[]>(`${this.url}/getProf`)
      .subscribe((resp: Profesional[]) => {
        const profesionales = resp.map((item: Profesional) => ({
          id: item.id,
          nombre: item.nombre,
        }));
      });
  }
  
  obtenerProfService(id: number): Observable<Profesional[]>{
    return this.http.get<Profesional[]>(`${this.url}/getPS/${id}`);
  }
}
