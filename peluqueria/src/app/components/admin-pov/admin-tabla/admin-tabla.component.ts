import { Component, input } from '@angular/core';

@Component({
  selector: 'app-admin-tabla',
  imports: [],
  templateUrl: './admin-tabla.component.html',
  styleUrl: './admin-tabla.component.css'
})
export default class AdminTablaComponent {
  titulos = input.required<string[]>()
  datos = input.required<[]>()
}
