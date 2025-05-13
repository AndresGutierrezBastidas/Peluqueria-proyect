import { Component, effect, inject, input, signal } from '@angular/core';
import { Servicio } from '@interfaces/servicio.interface';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';
import { ServiciosLandingService } from '@servicios/landingServices/servicio-service/servicios-landing.service';

@Component({
  selector: 'tabla-servicios',
  imports: [],
  templateUrl: './tabla-servicios.component.html',
  styleUrl: './tabla-servicios.component.css'
})
export class TablaServiciosComponent {
  datos = input.required<Servicio[]>();
  table = signal(false);
  titulos = signal<string[]>([]);
  profesionales = inject(ProfesionalesService);

  constructor() {
    effect(() => {
      const datos = this.datos();
      if (datos.length > 0) {
        this.titulos.set([...Object.keys(datos[0]), 'editar']);
      }
    });
  }

  isVisible(open: boolean) {
    this.table.set(open);
  }
}
