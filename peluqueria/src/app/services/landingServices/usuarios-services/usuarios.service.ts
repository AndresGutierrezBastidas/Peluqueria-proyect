import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { usuario } from '@interfaces/usuario.interface';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:3000/api/usuario';

  constructor(private http:HttpClient) {
  }
  obtenerUsuario(){
    return this.http.get<usuario[]>(`${this.url}/getUsuario/1`);
  }

}
