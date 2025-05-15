import { Component, inject } from '@angular/core';
import AdminTablaComponent from '@componentes/admin-pov/admin-tabla-profesionales/admin-tabla.component';
import { TablaReservasComponent } from '@componentes/admin-pov/tabla-reservas/tabla-reservas.component';
import { ReservaServiceService } from '@servicios/landingServices/reserva-service/reserva-service.service';

@Component({
  selector: 'app-admin-reservas',
  imports: [TablaReservasComponent],
  templateUrl: './admin-reservas.component.html',
  styleUrl: './admin-reservas.component.css'
})
export default class AdminReservasComponent {
  reservas = inject(ReservaServiceService);
}
