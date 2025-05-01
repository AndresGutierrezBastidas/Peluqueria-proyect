<<<<<<< HEAD
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor() { }
=======
import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  constructor() {

  }


  getProfesionales = effect(() => {
    this.obtenerProfesionales()
  })

  http = inject(HttpClient);
  url = 'http://localhost:3000/api/profesionales';
  profesionales = signal<Profesional[]>([]);

  obtenerProfesionales():Profesional[]{
    this.http
      .get<Profesional[]>(`${this.url}/getProf`)
      .subscribe((resp: Profesional[]) => {
        const profesionales = resp.map((item: Profesional) => ({
          id: item.id,
          nombre: item.nombre,
        }));
        this.profesionales.update((lista) => [...lista, ...profesionales]);
      });

      return this.profesionales()
  }
>>>>>>> presentacion
}
