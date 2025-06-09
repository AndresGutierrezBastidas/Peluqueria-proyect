import { Component, DestroyRef, effect, inject, input, OnInit, output, signal, Signal } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { HorasService } from '@servicios/landingServices/horas-services/horas.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Sign } from 'crypto';

@Component({
  selector: 'horas',
  imports: [],
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css',
})
export class HorasComponent implements OnInit {
  private horasS = inject(HorasService)
  sT = signal<number>(0);
  hora = output<Horas>();


  fecha = input.required<Date>();


  destroyed = inject(DestroyRef);
  reservas = signal<Horas[] | null>(null)
  error = signal<string | null>(null);

  selectTime(time: Horas) {    
    this.sT.set(time.id);
    this.hora.emit(time);
  }


  ngOnInit(){

    this.loadReservas()
      
  }

  private loadReservas() {
    if (!this.fecha() || isNaN(this.fecha().getTime())) {
      this.error.set('Fecha inválida');
      return;
    }

    this.horasS.obtenerReservasPorFecha(this.fecha()).pipe(
      takeUntilDestroyed(this.destroyed)
    ).subscribe({
      next: (reservas) => this.reservas.set(reservas),
      error: (err) => this.error.set(err.message)
    });
  }




  
  
}
