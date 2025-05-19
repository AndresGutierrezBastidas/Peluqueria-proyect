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
      loadComponent: () => import('@paginas/admin-pov/admin-dasboard/admin-dasboard.component'),
      children: [
        {
          path: 'profesionales',
          loadComponent: () =>
          import('@paginas/admin-pov/admin-profesionales/admin-profesionales.component'),
        },{
          path: 'servicios',
          loadComponent: () =>
          import('@paginas/admin-pov/admin-servicios/admin-servicios.component'),
        },{
          path: 'reservas',
          loadComponent: () =>
          import('@paginas/admin-pov/admin-reservas/admin-reservas.component'),
        }
      ]
    },
    {
    path: '**',
    redirectTo: 'Inicio'
    }
];
