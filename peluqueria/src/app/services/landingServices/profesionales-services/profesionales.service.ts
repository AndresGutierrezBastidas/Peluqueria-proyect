import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  constructor() {
  }

  http = inject(HttpClient);
  private url = 'http://localhost:3000/api/profesionales';
  profesionales = signal<Profesional[]>([]);


  getProfesionales = effect(() => {
    this.obtenerProfesionales()
  })

  

  obtenerProfesionales(): Observable<Profesional[]>{
    return this.http.get<Profesional[]>(`${this.url}/getProf`);
  }
  
}
