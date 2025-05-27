import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-reserva',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-reserva.component.html',
  styleUrl: './confirmar-reserva.component.css'
})
export default class ConfirmarReservaComponent implements OnInit{

  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private vE = 0;


  ngOnInit() {
    console.log("hola:", this.vE);
    
    const token = this.route.snapshot.paramMap.get('token');
    if (this.vE === 0) {
      console.log("1", this.vE);
      this.vE = 1;
      console.log("2", this.vE);
      if (token) {
        this.http.post('http://localhost:3000/api/reserva/confirmar', { token: token }).subscribe({
          next: (response) => {
            console.log("Respuesta del servidor:", response);
            // Aquí puedes manejar la respuesta del servidor
          },
          error: (error) => {
            console.error("Error al confirmar la reserva:", error);
            // Aquí puedes manejar el error
          }
        })
      }
    }
  }
}
