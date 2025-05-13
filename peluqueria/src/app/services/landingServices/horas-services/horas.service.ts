import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  private apiUrl = 'http://localhost:3000/api/hours';
  private http = inject(HttpClient);

  getHoras(): Observable<Horas[]> {
    return this.http.get<Horas[]>(`${this.apiUrl}/getHours`);
  } 

}
