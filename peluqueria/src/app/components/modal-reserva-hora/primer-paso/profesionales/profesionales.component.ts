<<<<<<< HEAD
import { Component, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, OnDestroy, OnInit, output, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
// register Swiper custom elements
register();

=======
import { Component, output } from '@angular/core';
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c

@Component({
  selector: 'profesionales',
  imports: [],
<<<<<<< HEAD
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css',
})
export class ProfesionalesComponent {
  selectedProfessional: any = null;
  groupedProfessionals = signal<any[][]>([]);
  currentGroupIndex: number = 0;
  profesional = output<any>();
  destroyed = new Subject<void>();
  
  swiperElement = signal<SwiperContainer | null>(null)

  professionals = signal<any[]>([{
=======
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  selectedProfessional: any = null;
  groupedProfessionals: any[][] = [];
  currentGroupIndex: number = 0;
  profesional = output<any>();

  professionals: any[] = [{
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c
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
<<<<<<< HEAD
  }
  ]);

  constructor(private responsive: BreakpointObserver) {

    this.Breakpoint()
    
    const swiperContainer = document.querySelector('.swiper-container')
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 16,
      freeMode: true,
    }

    if(swiperContainer){
      Object.assign(swiperContainer!, swiperOptions)
      this.swiperElement.set(swiperContainer as SwiperContainer)
      this.swiperElement()?.initialize
    }
  } 

  Breakpoint(){
    this.responsive.observe("(width >= 768px)").pipe(takeUntil(this.destroyed)).subscribe(state => {
      if(state.matches){
        console.log("Arreglo de 5")
        this.groupProfessionals(5);
      }else{
        console.log("Arreglo de 3")
        this.groupProfessionals(3);
      }
    })
=======
  },
  ];

  constructor() {
    this.groupProfessionals();
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c
  }

  selectProfessional(professional: any) {
    this.selectedProfessional = professional;
    this.profesional.emit(this.selectedProfessional);
  }

<<<<<<< HEAD
  groupProfessionals(qty: number) {
    const groupSize = qty;
    this.groupedProfessionals.set([]);
    for (let i = 0; i < this.professionals().length; i += groupSize) {
    this.groupedProfessionals.update((prev) => [...prev, this.professionals().slice(i, i + groupSize)]);
    //Pushea el grupo de profesionales en este arreglo, que deberían ser 5 por cada slide.
    }
  }

=======
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
>>>>>>> 03e3d63859c28e1ed03c0cf999d0ab8bb9c0c11c
}
