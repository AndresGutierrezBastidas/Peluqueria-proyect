import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, inject, input, output, signal } from '@angular/core';
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
  professionals = signal<Profesional[]>([]);


  /* Funciones Profesionales */
  selectProfessional(professional: any) {
    this.sp.set(professional.id);
    this.profesional.emit(professional);
  }

  groupProfessionals(qty: number) {
    const groupSize = qty;
    this.groupedProfessionals.set([]);
    if(this.professionals()){
      for (let i = 0; i < this.professionals().length; i += groupSize) {
      this.groupedProfessionals.update((prev) => [...prev, this.professionals().slice(i, i + groupSize)]);
      //Pushea el grupo de profesionales en este arreglo, que deberían ser 5 por cada slide.
      }
    } 
  }

  /* Funciones Swiper */
  constructor(private responsive: BreakpointObserver) {
    
    this.setUpBreakpointListener()
    // Escuchar cambios en los profesionales del servicio
    effect(() => {
      console.log('Lol')
      this.professionals.set(this.profService.profesionales());
      this.applyBreakPoint() // Vuelve a agrupar cuando lleguen los datos
    });
    
    
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

  private setUpBreakpointListener(){
    this.responsive.observe("(width >= 768px)").pipe(takeUntil(this.destroyed)).subscribe(state => {
      this.handleBreakPoint(state.matches)
    })
  }

  private handleBreakPoint(isLargeScreen: boolean){
    const groupSize = isLargeScreen ? 5 : 3;
    console.log(`Arreglo de ${groupSize}`)
    this.groupProfessionals(groupSize)
  }

  private applyBreakPoint(){
    const widthScreen = window.innerWidth;
    const isScreenLarge = widthScreen >= 768;
    this.handleBreakPoint(isScreenLarge);
  }

  
}
