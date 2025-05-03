import { Component, inject, signal } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ModalReservaHoraComponent } from '@componentes/modal-reserva-hora/modal-reserva-hora.component';



@Component({
  selector: 'landing-services',
  imports: [ServiceCardComponent,ModalReservaHoraComponent],
  templateUrl: './landing-services.component.html',
  styleUrl: './landing-services.component.css'
})
export class LandingServicesComponent {
  
  /* Variables Modal */
  isModalVisible= signal<boolean>(false);

  openModal() {
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }
}
