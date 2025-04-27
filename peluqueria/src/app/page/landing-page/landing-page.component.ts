
import { Component, inject } from '@angular/core';
import { LandingAboutUsComponent } from '../../components/landing-page/landing-about-us/landing-about-us.component';
import { LandingServicesComponent } from '../../components/landing-page/landing-services/landing-services.component';
import { LandingWelcomeComponent } from '../../components/landing-page/landing-welcome/landing-welcome.component';
import { LandingMapComponent } from '../../components/landing-page/landing-map/landing-map.component';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';


@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [LandingAboutUsComponent,LandingServicesComponent,LandingWelcomeComponent,LandingMapComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export default class LandingPageComponent {
  
}
