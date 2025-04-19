import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'admin-tabla',
  imports: [],
  templateUrl: './admin-tabla.component.html',
  styleUrl: './admin-tabla.component.css'
})
export default class AdminTablaComponent {
  // titulos = input.required<string[]>()
  // datos = input.required<[]>()

  titulos = signal(['nombre','apellido','estado','rut', 'editar']);
  datos = signal([['Miguel','Pérez','activo','222'],['Sebastian','Silva','inactivo','333'],['Andres','Bastidas','activo','444']]);

}
