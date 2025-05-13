import { Routes } from '@angular/router';
import path from 'path';

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
      loadComponent: () => import('@paginas/admin-pov/admin-profesionales/admin-profesionales.component')
    },
    {
      path: 'side-bar',
      loadComponent: () => import('@componentes/admin-pov/side-bar/side-bar.component'),
      children: [
        {
          path: 'tabla',
          loadComponent: () =>
          import('@paginas/admin-pov/admin-profesionales/admin-profesionales.component'),
        },
        {
          path: 'cuenta',
          loadComponent: () =>
          import('@paginas/admin-pov/admin-cuenta/admin-cuenta.component'),
        }
      ]
    },
    {
    path: '**',
    redirectTo: 'Inicio'
    }
];
