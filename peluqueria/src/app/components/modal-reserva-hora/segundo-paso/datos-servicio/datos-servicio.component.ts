import { Component, input } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { Profesional } from '@interfaces/profesionales.interface';


@Component({
  selector: 'datos-servicio',
  imports: [],
  templateUrl: './datos-servicio.component.html',
  styleUrl: './datos-servicio.component.css'
})
export class DatosServicioComponent {
  datosFS = input.required<[Date, Horas, Profesional]>();

}
