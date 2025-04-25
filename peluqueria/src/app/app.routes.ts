import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'Inicio',
      loadComponent:() => import('@paginas/landing-page/landing-page.component'),
    },{
      path: 'Conocenos',
      loadComponent: () => import('@paginas/about-us-page/about-us-page.component'),
    },
    {
      path: 'tabla',
      loadComponent: () => import('@paginas/admin-pov/admin-profesionales/admin-profesionales.component'),
    },
    {
      path: 'side-bar',
      loadComponent: () => import('@componentes/admin-pov/side-bar/side-bar.component'),
    },
    {
    path: '**',
    redirectTo: 'Inicio'
    }
];
