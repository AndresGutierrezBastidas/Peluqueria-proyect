import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Manu

//[✅] obtener horas
//[❌] crear horas
//[❌] editar horas


export class HorasService {

  private apiUrl = 'http://localhost:3000/api/hours';
  private http = inject(HttpClient);

  //obtener horas desde las base de datos funcion de manu
  getHoras(): Observable<Horas[]> {
    return this.http.get<Horas[]>(`${this.apiUrl}/getHours`);
  } 

}
