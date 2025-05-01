import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'landing-about-us',
  imports: [RouterLink],
  templateUrl: './landing-about-us.component.html',
  styleUrl: './landing-about-us.component.css',
  animations: [
      trigger('fadeIn', [
        state('void', style({ opacity: 0, transform: 'translateX(20px)' })),
        transition(':enter', [
          animate('1s ease', keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(-50%)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ]))
        ])
      ])
    ]
  })
export class LandingAboutUsComponent {

}
