import { Component, inject, output, signal, Signal } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { HorasService } from '@servicios/landingServices/horas-services/horas.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'horas',
  imports: [],
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css'
})
export class HorasComponent {
  private horasS = inject(HorasService)
  sT = signal<number>(0);
  hora = output<Horas>();
  
  // Horarios disponibles
  horas: Signal<Horas[] | undefined> = toSignal(this.horasS.getHoras())

  selectTime(time: Horas) {    
    this.sT.set(time.id);
    this.hora.emit(time);
  }
}
