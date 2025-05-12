import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalReservaHoraComponent } from '@componentes/modal-reserva-hora/modal-reserva-hora.component';
import { ServiciosLandingService } from '@servicios/landingServices/servicio-service/servicios-landing.service';
import { Servicio } from '@interfaces/servicio.interface';

@Component({
  selector: 'service-card',
  imports: [CommonModule,ModalReservaHoraComponent],
  standalone: true, // importante si es un componente independiente
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {

  /* Variables Cards */
  showAll = false;

  isModalVisible = signal<boolean>(false);
  service = signal<Servicio>({} as Servicio);

  openModal(card: Servicio) {
    this.service.set(card);
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }

  serviciosS = inject(ServiciosLandingService);
  cards = signal<Servicio[]>(this.serviciosS.servicios().slice(0,4))

  ngOnInit(){
    this.serviciosS.obtenerServicios().subscribe({
      next: (res) => {
        if(res.length > 0){
          this.cards.set(res);
        }
      }
    })
  }

  toggleShow() {
    this.showAll = !this.showAll;
    this.showAll ? this.cards.set(this.serviciosS.servicios()) : this.cards.set(this.serviciosS.servicios().slice(0,4));
  }

}