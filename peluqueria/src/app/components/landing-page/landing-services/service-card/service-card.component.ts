import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'service-card',
  imports: [CommonModule],
  standalone: true, // importante si es un componente independiente
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  showAll = false;

  cards = [
    {
      title: 'Corte de pelo',
      description: 'Corte de pelo adecuado a tu forma de craneo',
      image: 'https://iscemp.edu.pe/wp-content/uploads/2023/11/barberia-iscemp-curso-03-1024x694.jpg',
    },
    {
      title: 'Corte de cabello',
      description: 'Corte moderno para realzar tu estilo.',
      image: 'https://iscemp.edu.pe/wp-content/uploads/2023/11/barberia-iscemp-curso-03-1024x694.jpg',
    },
    {
      title: 'Asesoría facial',
      description: 'Análisis facial para corte adecuado.',
      image: 'https://iscemp.edu.pe/wp-content/uploads/2023/11/barberia-iscemp-curso-03-1024x694.jpg',
    },
    {
      title: 'Tratamiento capilar',
      description: 'Tratamiento especializado para el cuero cabelludo.',
      image: 'https://iscemp.edu.pe/wp-content/uploads/2023/11/barberia-iscemp-curso-03-1024x694.jpg',
    },
    {
      title: 'Tratamiento capilar',
      description: 'Tratamiento especializado para el cuero cabelludo.',
      image: 'https://iscemp.edu.pe/wp-content/uploads/2023/11/barberia-iscemp-curso-03-1024x694.jpg',
    }
  ];

  get visibleCards() {
    return this.showAll ? this.cards : this.cards.slice(0, 4);
  }

  toggleShow() {
    this.showAll = !this.showAll;
  }
}