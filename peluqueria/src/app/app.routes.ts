import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'Inicio',
      loadComponent:()=>import('@paginas/landing-page/landing-page.component'),
    },{
      path: 'Conocenos',
      loadComponent: () => import('@paginas/about-us-page/about-us-page.component'),
    },
    {
    path: '**',
    redirectTo: 'Inicio'
    }
];
