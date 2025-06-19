import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { usuario } from '@interfaces/usuario.interface';
import { UsuariosService } from '@servicios/landingServices/usuarios-services/usuarios.service';
import { N } from 'node_modules/@angular/core/navigation_types.d-DgDrF5rp';

@Component({
  selector: 'app-admin-cuenta',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-cuenta.component.html',
  styleUrl: './admin-cuenta.component.css'
})
export default class AdminCuentaComponent {
  fb = inject(FormBuilder);
  private Uservice = inject(UsuariosService)
  usuario = this.Uservice.obtenerUsuario();
  form= this.fb.group({
    correo:['', [Validators.required]],
    oldPass:['', [Validators.required]],
    newPass:['', [Validators.required]],
    newMail:['', [Validators.required]],    
  })
  user:usuario={
    id:null,
    pasword:"",
    idCliente:null,
    rol:null
  }
  handleSubmit(){
    console.log(this.usuario.subscribe({
      next:(usuarioRequest)=>{
        this.user = usuarioRequest[0];
        console.log(this.user.id)
      }
    }))
  }
}
