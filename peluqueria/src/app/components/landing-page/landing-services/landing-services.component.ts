import { Component, inject, signal } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiciosLandingService } from '@servicios/landingServices/servicio-service/servicios-landing.service';
import { Servicio } from '@interfaces/servicio.interface';
import { ModalReservaHoraComponent } from '@componentes/modal-reserva-hora/modal-reserva-hora.component';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';
import { Profesional } from '@interfaces/profesionales.interface';



@Component({
  selector: 'landing-services',
  imports: [ServiceCardComponent,ModalReservaHoraComponent],
  templateUrl: './landing-services.component.html',
  styleUrl: './landing-services.component.css'
})
export class LandingServicesComponent {
  serviciosService = inject(ServiciosLandingService);
  servicios =  signal<Servicio[]>(this.serviciosService.obtenerServicios());
  
  /* Variables Modal */
  isModalVisible= signal<boolean>(false);

  openModal() {
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }
}
