import { Component, inject } from '@angular/core';
import SideBarComponent from "../../../components/admin-pov/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-dasboard',
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './admin-dasboard.component.html',
  styleUrl: './admin-dasboard.component.css'
})
export default class AdminDasboardComponent {

}
