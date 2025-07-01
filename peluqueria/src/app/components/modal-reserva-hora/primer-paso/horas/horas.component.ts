import { Component, DestroyRef, inject, input, OnDestroy, OnInit, output, signal } from '@angular/core';
import { Horas } from '@interfaces/horas.interface';
import { HorasService } from '@servicios/landingServices/horas-services/horas.service';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, combineLatest, finalize, of, switchMap, tap } from 'rxjs';
import { ModalServiceService } from '@servicios/landingServices/modal-services/modal-service.service';

@Component({
  selector: 'horas',
  imports: [],
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css',
})
export class HorasComponent implements OnDestroy {
  private horasS = inject(HorasService)
  private formLimpiar = inject(ModalServiceService)
  sT = signal<number>(0);
  hora = output<Horas>();


  fecha = input.required<Date>();
  idProfesional = input<number>();
  private idProfesional$ = toObservable(this.idProfesional);
  private fecha$ = toObservable(this.fecha);
  private destroyRef = inject(DestroyRef);

  error = signal<string | null>(null);

  selectTime(time: Horas) {  
    if(time.tomado) return;  
    this.sT.set(time.id);
    this.hora.emit(time);
  }

  reservas = toSignal(
    combineLatest([this.fecha$, this.idProfesional$]).pipe(
      takeUntilDestroyed(this.destroyRef),
      switchMap(([fecha, idProfesional]) => {
        
        if (!fecha || isNaN(fecha.getTime()) || !idProfesional) {
          this.error.set('Escoge tu profesional y fecha');
          return of([] as Horas[]); 
        }else {
          this.error.set(null);
        }
        return this.horasS.obtenerReservasPorFecha(fecha, idProfesional).pipe(
          tap(() => {
            this.formLimpiar.form.get('FS')?.reset()
            this.hora.emit({
              id: NaN,
              hora: ''
            })
            this.sT.set(0)
          }),
          catchError(err => {
            err;
            return of([] as Horas[]);
          }),
          finalize(() => console.log('Cleanup para:', { fecha, idProfesional }))
        );
      })
    ),
    { initialValue: [] as Horas[],
      manualCleanup: true,
     }
  );

  ngOnDestroy() {
    this.fecha().setDate(new Date().getDate())
    console.log('💥 Componente destruido');
    this.sT.set(0);
  }

}
