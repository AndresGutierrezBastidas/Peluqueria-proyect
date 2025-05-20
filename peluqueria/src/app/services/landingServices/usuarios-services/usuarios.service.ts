import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
//[❌] obtener Usuarios por id
//[❌] Editar Usuarios 
  http = inject(HttpClient);
  url = 'http://localhost:3000/api';
  constructor() {

  }

  obtenerUsuario(){

  }

}
