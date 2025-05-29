import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '@servicios/landingServices/usuarios-services/usuarios.service';

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
  user:any
  handleSubmit(){
    console.log(this.usuario.subscribe({
      next:(usuario)=>{
        this.user = usuario;
        console.log(this.user.id)
      }
    }))
  }
}
