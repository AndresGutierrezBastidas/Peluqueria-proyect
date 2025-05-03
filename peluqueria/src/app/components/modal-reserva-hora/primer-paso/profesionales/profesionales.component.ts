import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, output, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import {BreakpointObserver} from '@angular/cdk/layout';
import {  Subject, takeUntil } from 'rxjs';
import { Profesional } from '@interfaces/profesionales.interface';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';

// register Swiper custom elements
register();

@Component({
  selector: 'profesionales',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css',
})
export class ProfesionalesComponent {
  groupedProfessionals = signal<any[][]>([]);
  
  currentGroupIndex: number = 0;
  profesional = output<any>();
  destroyed = new Subject<void>();
  swiperElement = signal<SwiperContainer | null>(null);

  profService = inject(ProfesionalesService)
  sp = signal(NaN);
  professionals = signal<Profesional[]>(this.profService.profesionales()); 

  /* Funciones Profesionales */
  selectProfessional(professional: any) {
    this.sp.set(professional.id);
    this.profesional.emit(professional);
  }

  groupProfessionals(qty: number) {
    const groupSize = qty;
    this.groupedProfessionals.set([]);
    console.log(this.professionals())
    if(this.professionals()){
      for (let i = 0; i < this.professionals().length; i += groupSize) {
      this.groupedProfessionals.update((prev) => [...prev, this.professionals().slice(i, i + groupSize)]);
      //Pushea el grupo de profesionales en este arreglo, que deberían ser 5 por cada slide.
      }
    } 
  }

  /* Funciones Swiper */
  constructor(private responsive: BreakpointObserver) {
    console.log(`contructor = ${this.professionals()}`)
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
  }

  
}
