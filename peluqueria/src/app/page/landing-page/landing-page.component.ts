
import { Component, inject, signal } from '@angular/core';
import { LandingAboutUsComponent } from '../../components/landing-page/landing-about-us/landing-about-us.component';
import { LandingServicesComponent } from '../../components/landing-page/landing-services/landing-services.component';
import { LandingWelcomeComponent } from '../../components/landing-page/landing-welcome/landing-welcome.component';
import { LandingMapComponent } from '../../components/landing-page/landing-map/landing-map.component';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';




@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [LandingAboutUsComponent,LandingServicesComponent,LandingWelcomeComponent,LandingMapComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('1.25s', keyframes([
          style({ opacity: 0, transform: 'translateX(-300%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.7 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export default class LandingPageComponent {



}
