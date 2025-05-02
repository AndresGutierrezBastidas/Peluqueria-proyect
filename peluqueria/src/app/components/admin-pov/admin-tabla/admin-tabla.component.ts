import { Component, inject, input, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Profesional } from '@interfaces/profesionales.interface';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';

@Component({
  selector: 'admin-tabla',
  imports: [],
  templateUrl: './admin-tabla.component.html',
  styleUrl: './admin-tabla.component.css'
})
export default class AdminTablaComponent {
  // titulos = input.required<string[]>()
  // datos = input.required<[]>()





  profesionales = inject(ProfesionalesService)
  datos: Signal<Profesional[] | undefined> = toSignal(this.profesionales.obtenerProfesionales());

  constructor(){
    console.log(this.datos())
    this.titulos.update((titulos) => [...titulos,'editar'])
  }

  table = signal(false);

  isVisible(open:boolean){
    this.table.set(open);
  }

  titulos = signal(this.datos.length > 0 ? Object.keys(this.datos()![0] ) : []);


  // titulos = signal(['id','nombre','editar']);


}
