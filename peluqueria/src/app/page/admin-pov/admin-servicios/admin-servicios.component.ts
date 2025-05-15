import { Component, inject } from '@angular/core';
import AdminTablaComponent from '@componentes/admin-pov/admin-tabla-profesionales/admin-tabla.component';
import { TablaServiciosComponent } from '@componentes/admin-pov/tabla-servicios/tabla-servicios.component';
import { ServiciosLandingService } from '@servicios/landingServices/servicio-service/servicios-landing.service';

@Component({
  selector: 'app-admin-servicios',
  imports: [TablaServiciosComponent],
  templateUrl: './admin-servicios.component.html',
  styleUrl: './admin-servicios.component.css'
})
export default class AdminServiciosComponent {
  servicios = inject(ServiciosLandingService);
  

}
