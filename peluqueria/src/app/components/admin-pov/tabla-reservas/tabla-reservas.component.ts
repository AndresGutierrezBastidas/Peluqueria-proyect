import { Component, effect, inject, input, signal } from '@angular/core';
import { Reserva, ReservaMiguel } from '@interfaces/reserva.interface';
import { ServiciosLandingService } from '@servicios/landingServices/servicio-service/servicios-landing.service';

@Component({
  selector: 'tabla-reservas',
  imports: [],
  templateUrl: './tabla-reservas.component.html',
  styleUrl: './tabla-reservas.component.css',
})
export class TablaReservasComponent {
  datosTabla = input.required<Reserva[]>();
  table = signal(false);
  titulosTabla = signal<string[]>([]);
  serviciosService = inject(ServiciosLandingService);

  constructor() {
    effect(() => {
      const datos = this.datosTabla();
      if (datos.length > 0) {
        this.titulosTabla.set([...Object.keys(datos[0]), 'editar']);
      }
    });
  }

  fechaFormateada(fecha: any) {
    return new Date(fecha).toLocaleDateString();
  }

  isVisible(open: boolean) {
    this.table.set(open);
  }
}
