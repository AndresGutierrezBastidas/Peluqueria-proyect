import { Component, signal } from '@angular/core';
import { ModalReservaHoraComponent } from '@componentes/modal-reserva-hora/modal-reserva-hora.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [ModalReservaHoraComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    links = signal([{
      link: '#inicio',
      clases: 'text-gray-800 font-medium hover:text-amber-600 transition' ,
      label: 'Inicio'
    },
    {
      link: '#servicios',
      clases: 'text-gray-800 font-medium hover:text-amber-600 transition' ,
      label: 'Servicios'
    },
    {
      link: '#contacto',
      clases: 'text-gray-800 font-medium hover:text-amber-600 transition' ,
      label: 'Contacto'
    },
    {
      link: '#conoce',
      clases: 'text-gray-800 font-medium hover:text-amber-600 transition' ,
      label: 'Conocenos'
    }]);
}


