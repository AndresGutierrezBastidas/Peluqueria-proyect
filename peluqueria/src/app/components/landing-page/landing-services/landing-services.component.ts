import { Component, inject, signal } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiciosLandingService } from '@servicios/landingServices/servicio-service/servicios-landing.service';
import { Servicio } from '@interfaces/servicio.interface';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'landing-services',
  imports: [ServiceCardComponent],
  templateUrl: './landing-services.component.html',
  styleUrl: './landing-services.component.css',
})
export class LandingServicesComponent {
  serviciosService = inject(ServiciosLandingService);
  servicios =  signal<Servicio[]>(this.serviciosService.serviciosArray());

}
