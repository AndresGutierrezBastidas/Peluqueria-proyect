import { Component } from '@angular/core';
import { ModalReservaHoraComponent } from '@componentes/modal-reserva-hora/modal-reserva-hora.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [ModalReservaHoraComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  isModalVisible: boolean = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

}
