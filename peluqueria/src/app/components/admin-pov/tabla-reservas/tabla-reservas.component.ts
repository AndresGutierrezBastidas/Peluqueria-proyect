import { Component, effect, inject, input, signal } from '@angular/core';
import { Reserva } from '@interfaces/reserva.interface';
import { ReservaServiceService } from '@servicios/landingServices/reserva-service/reserva-service.service';

@Component({
  selector: 'tabla-reservas',
  imports: [],
  templateUrl: './tabla-reservas.component.html',
  styleUrl: './tabla-reservas.component.css'
})
export class TablaReservasComponent {
  datos = input.required<Reserva[]>();
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
