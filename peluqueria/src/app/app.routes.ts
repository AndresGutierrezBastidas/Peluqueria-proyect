import { Routes } from '@angular/router';
import { AboutUsPageComponent } from '@paginas/about-us-page/about-us-page.component';
import { LandingPageComponent } from '@paginas/landing-page/landing-page.component';

export const routes: Routes = [
    {
    path: 'Inicio',
    component: LandingPageComponent
    },
    {
    path: 'Nosotros',
    component: AboutUsPageComponent
    },
    {
    path: '**',
    redirectTo: 'Inicio'
    }
];
