import { Component, input } from '@angular/core';

@Component({
  selector: 'datos-servicio',
  imports: [],
  templateUrl: './datos-servicio.component.html',
  styleUrl: './datos-servicio.component.css'
})
export class DatosServicioComponent {
  fechaReserva = input.required<Date>();
  horaReserva= input.required<string>();
  profesional= input.required<any>();

}
