import { Component, inject } from '@angular/core';
import AdminTablaComponent from '@componentes/admin-pov/admin-tabla/admin-tabla.component';
import { ProfesionalesComponent } from '@componentes/modal-reserva-hora/primer-paso/profesionales/profesionales.component';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';

@Component({
  selector: 'app-admin-profesionales',
  imports: [AdminTablaComponent],
  templateUrl: './admin-profesionales.component.html',
  styleUrl: './admin-profesionales.component.css'
})
export default class AdminProfesionalesComponent {
  profesionales = inject(ProfesionalesService);
}
