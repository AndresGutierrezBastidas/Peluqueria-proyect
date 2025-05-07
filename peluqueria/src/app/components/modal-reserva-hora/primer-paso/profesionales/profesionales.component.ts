import { Component, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import {BreakpointObserver} from '@angular/cdk/layout';
import {  pipe, Subject, takeUntil } from 'rxjs';
import { Profesional } from '@interfaces/profesionales.interface';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// register Swiper custom elements
register();

@Component({
  selector: 'profesionales',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css',
})
export class ProfesionalesComponent implements OnInit {
  groupedProfessionals = signal<any[][]>([]);
  
  currentGroupIndex: number = 0;
  profesional = output<any>();
  destroyed = inject(DestroyRef);
  swiperElement = signal<SwiperContainer | null>(null);
  
  private profService = inject(ProfesionalesService)
  sp = signal(NaN);
  professionals = signal<Profesional[]>([]);
  serviceId = input.required<number>();
  
  
  /* Funciones Profesionales */
  selectProfessional(professional: any) {
    this.sp.set(professional.id);
    this.profesional.emit(professional);
  }
  
  ngOnInit() {
    this.loadProfessionals();
  }

  /* Funciones Swiper */
  constructor(private responsive: BreakpointObserver) {
    this.setUpBreakpointListener()
    
  } 
  
  private loadProfessionals() {
    this.profService.getProfServicios(this.serviceId()).pipe(takeUntilDestroyed(this.destroyed)).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.professionals.set(res);
          this.applyInitialView(); //Aquí estaba el problema. Se seteaban los profesionales, 
          // pero no se realizaba la actualización del arreglo de groupedProfessionals() de forma inicial
        }
      },
      error: (err) => console.error('Error loading professionals', err)
    });
  }


  private initializeSwiper() {
    setTimeout(() => { // Pequeño delay para asegurar renderizado
      const swiperContainer = document.querySelector('.swiper-container');
      if (swiperContainer) {
        const swiperOptions: SwiperOptions = {
          slidesPerView: 1,
          spaceBetween: 16,
          freeMode: true,
        };
        Object.assign(swiperContainer, swiperOptions);
        this.swiperElement.set(swiperContainer as SwiperContainer);
        this.swiperElement()?.initialize();
      }
    }, 50);
  }


  private applyInitialView() {
    const initialGroupSize = window.innerWidth >= 768 ? 5 : 3;
    this.groupProfessionals(initialGroupSize);
    this.initializeSwiper();
  }


  groupProfessionals(qty: number) {
    const groupSize = qty;
    const group = []
    if(this.professionals().length > 0){
      for (let i = 0; i < this.professionals().length; i += groupSize) {
      group.push(this.professionals().slice(i, i + groupSize))
      //Pushea el grupo de profesionales en este arreglo, que deberían ser 5 por cada slide.
    }
      this.groupedProfessionals.set(group)
    } 
  }

  private setUpBreakpointListener(){
    this.responsive.observe("(width >= 768px)").pipe(takeUntilDestroyed(this.destroyed)).subscribe(state => {
      this.handleBreakPoint(state.matches)
    })
  }



  private handleBreakPoint(isLargeScreen: boolean){
    const groupSize = isLargeScreen ? 5 : 3;
    this.groupProfessionals(groupSize)
  }


  
}
