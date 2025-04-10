import { Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component'

export const routes: Routes = [
    {
    path: 'Inicio',
    component: LandingPageComponent
    },
    {
    path: '**',
    redirectTo: 'Inicio'
    }
];
