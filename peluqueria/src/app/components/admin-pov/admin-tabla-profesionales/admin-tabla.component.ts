import { Component, effect, inject, input, signal } from '@angular/core';
import { Profesional } from '@interfaces/profesionales.interface';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';

@Component({
  selector: 'admin-tabla',
  imports: [],
  templateUrl: './admin-tabla.component.html',
  styleUrl: './admin-tabla.component.css'
})
export default class AdminTablaComponent {
  datos = input.required<Profesional[]>();
  profesionales = inject(ProfesionalesService);
  table = signal(false);
  titulos = signal<string[]>([]);

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
