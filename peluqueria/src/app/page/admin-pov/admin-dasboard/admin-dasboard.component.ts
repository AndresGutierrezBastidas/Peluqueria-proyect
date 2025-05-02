import { Component } from '@angular/core';
import SideBarComponent from "../../../components/admin-pov/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';
import AdminTablaComponent from "../../../components/admin-pov/admin-tabla/admin-tabla.component";

@Component({
  selector: 'app-admin-dasboard',
  imports: [SideBarComponent, RouterOutlet, AdminTablaComponent],
  templateUrl: './admin-dasboard.component.html',
  styleUrl: './admin-dasboard.component.css'
})
export default class AdminDasboardComponent {

}
