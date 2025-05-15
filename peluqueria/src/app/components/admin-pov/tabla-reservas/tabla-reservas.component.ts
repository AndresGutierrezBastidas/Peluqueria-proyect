import { Component, effect, inject, input, signal } from '@angular/core';
import { Reserva } from '@interfaces/reserva.interface';
import { ServiciosLandingService } from '@servicios/landingServices/servicio-service/servicios-landing.service';

@Component({
  selector: 'tabla-reservas',
  imports: [],
  templateUrl: './tabla-reservas.component.html',
  styleUrl: './tabla-reservas.component.css',
})
export class TablaReservasComponent {
  datos = input.required<Reserva[]>();
  table = signal(false);
  titulos = signal<string[]>([]);
  servicios = inject(ServiciosLandingService);

  constructor() {
    effect(() => {
      const datos = this.datos();
      if (datos.length > 0) {
        this.titulos.set([...Object.keys(datos[0]), 'editar']);
      }
      console.log(this.datos());
    });
  }

  fechaFormateada(fecha: any) {
    const date = new Date(fecha)
    return date.toLocaleDateString();
  }

  isVisible(open: boolean) {
    this.table.set(open);
  }
}
