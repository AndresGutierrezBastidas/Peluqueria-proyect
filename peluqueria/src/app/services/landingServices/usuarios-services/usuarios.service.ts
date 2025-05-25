import { adapter } from '@adapter/commonAdapter';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {usuario} from '@interfaces/usuario.interface'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
//[❌] obtener Usuarios por id
//[❌] Editar Usuarios 
  http = inject(HttpClient);
  url = 'http://localhost:3000/api/usuario';

  constructor() {
  }
  obtenerUsuario(){
    
  }

}
