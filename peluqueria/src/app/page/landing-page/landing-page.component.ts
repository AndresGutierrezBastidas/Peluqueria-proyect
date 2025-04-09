import { LandingServicesComponent } from '../../components/landing-services/landing-services.component';
import { LandingWelcomeComponent } from '../../components/landing-welcome/landing-welcome.component';
import { LandingAboutUsComponent } from './../../components/landing-about-us/landing-about-us.component';
import { Component } from '@angular/core';


@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [LandingAboutUsComponent,LandingServicesComponent,LandingWelcomeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
