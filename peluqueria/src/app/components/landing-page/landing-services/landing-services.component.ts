import { Component } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';




@Component({
  selector: 'landing-services',
  imports: [ServiceCardComponent],
  templateUrl: './landing-services.component.html',
  styleUrl: './landing-services.component.css'
})
export class LandingServicesComponent {
  
}
