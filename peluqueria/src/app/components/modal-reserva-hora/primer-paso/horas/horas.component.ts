import { Component, DestroyRef, inject, input, OnDestroy, output, signal } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { HorasService } from '@servicios/landingServices/horas-services/horas.service';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { asyncScheduler, catchError, finalize, of, scheduled, switchMap, tap } from 'rxjs';

@Component({
  selector: 'horas',
  imports: [],
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css',
})
export class HorasComponent implements OnDestroy {
  private horasS = inject(HorasService)
  sT = signal<number>(0);
  hora = output<Horas>();


  fecha = input.required<Date>();
  idProfesional = input<Number>();
  private idProfesional$ = toObservable(this.fecha);
  private fecha$ = toObservable(this.fecha);
  private destroyRef = inject(DestroyRef);

  error = signal<string | null>(null);

  selectTime(time: Horas) {  
    if(time.tomado) return;  
    this.sT.set(time.id);
    this.hora.emit(time);
  }

  reservas = toSignal(
    this.fecha$.pipe(
      takeUntilDestroyed(this.destroyRef),
      switchMap(fecha => {
        console.log('Nueva fecha recibida:', fecha);
        return this.horasS.obtenerReservasPorFecha(fecha).pipe(
          tap(() => {
            this.sT.set(0);
            console.log('Respuesta recibida para:', fecha)
          }),
          catchError(err => {
            if (err.status === 0) {
              console.warn('Petición cancelada para:', fecha);
            } else {
              console.error('Error HTTP:', err);
            }
            return scheduled([], asyncScheduler);
          }),
          finalize(() => console.log('Cleanup para:', fecha))
        );
      })
    ),
    { initialValue: [],
      manualCleanup: true,
    }
  );


  ngOnDestroy() {
    this.fecha().setDate(new Date().getDate())
    console.log('💥 Componente destruido');
    this.sT.set(0);
  }

  
  
}
