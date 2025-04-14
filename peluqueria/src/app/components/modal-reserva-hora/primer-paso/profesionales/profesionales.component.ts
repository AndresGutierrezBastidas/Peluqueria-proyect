import { Component, output } from '@angular/core';

@Component({
  selector: 'profesionales',
  imports: [],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  selectedProfessional: any = null;
  groupedProfessionals: any[][] = [];
  currentGroupIndex: number = 0;
  profesional = output<any>();

  professionals: any[] = [{
    id: 1,
    nombre: 'Juan\nPerez',
  }, {
    id: 2,
    nombre: 'Maria\nLopez',
  }, {
    id: 3,
    nombre: 'Carlos\nSanchez',
  }, {
    id: 4,
    nombre: 'Miguel\nPerez',
  }, {
    id: 5,
    nombre: 'Ana\nTorres',
  }, {
    id: 6,
    nombre: 'Joaquin\nValdebenito',
  },
  {
    id: 7,
    nombre: 'Pedro\nTorres'
  },
  {
    id: 8,
    nombre: 'Laura\nFernandez'
  },
  {
    id: 9,
    nombre: 'Diego\nVargas'
  },
  {
    id: 10,
    nombre: 'Carla\nHerrera'
  },
  ];

  constructor() {
    this.groupProfessionals();
  }

  selectProfessional(professional: any) {
    this.selectedProfessional = professional;
    this.profesional.emit(this.selectedProfessional);
  }

  groupProfessionals(){
    const groupSize = 5;
    for(let i = 0; i < this.professionals.length; i += groupSize) {
      this.groupedProfessionals.push(this.professionals.slice(i, i + groupSize));
    }
  }

  carruselIzquierda() {
    if(this.currentGroupIndex > 0) {
      this.currentGroupIndex--;
    }
  }

  carruselDerecha() {
    if(this.currentGroupIndex < this.groupedProfessionals.length - 1) {
      this.currentGroupIndex++;
    }
  }
}
