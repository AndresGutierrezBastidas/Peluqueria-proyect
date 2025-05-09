import { Profesional } from '@interfaces/profesionales.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { adapter } from '@adapter/commonAdapter';
import { toSignal } from '@angular/core/rxjs-interop'; // Opcional para Angular 16+
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/api/profesionales';

  // Signal con Map<number, Profesional> (id es number)
  profesionalesMap = signal<Map<number, Profesional>>(new Map());

  // Signal con array original por si necesitas mantenerlo
  profesionalesArray = signal<Profesional[]>([]);

  constructor() {
    this.obtenerProfesionales();
  }

  obtenerProfesionales() {
    this.http.get<Profesional[]>(`${this.url}/getProf`)
      .pipe(
        map(resp => adapter(resp)) // Adapta la respuesta si es necesario
      )
      .subscribe((profesionales: Profesional[]) => {
        // 1. Actualizar el array
        this.profesionalesArray.set(profesionales);

        // 2. Crear un nuevo Map con los profesionales indexados por ID
        const nuevoMap = new Map<number, Profesional>();
        profesionales.forEach(prof => {
          if (prof.id != null) { // Verificación opcional de null/undefined
            nuevoMap.set(prof.id, prof);
          }
        });

        // 3. Actualizar la señal del Map
        this.profesionalesMap.set(nuevoMap);
      });
  }

  // Método para obtener un profesional por ID (number)
  getProfesionalById(id: number): Profesional | undefined {

    return this.profesionalesMap().get(id);
  }

  
}
