import { Component } from '@angular/core';

@Component({
  selector: 'profesionales',
  imports: [],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {

  professionals: any[] = [{
    id: 1,
    nombre: 'Juan Perez',
  }, {
    id: 2,
    nombre: 'Maria Lopez',
  }, {
    id: 3,
    nombre: 'Carlos Sanchez',
  },{
    id: 4,
    nombre: 'Miguel Perez',
  }, {
    id: 5,
    nombre: 'Ana Torres',
  }, {
    id: 6,
    nombre: 'Joaquin Valdebenito',
  }];

  carruselIzquierda(){

  }

  carruselDerecha(){

  }
}
