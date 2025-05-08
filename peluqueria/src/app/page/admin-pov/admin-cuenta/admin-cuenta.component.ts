import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-cuenta',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-cuenta.component.html',
  styleUrl: './admin-cuenta.component.css'
})
export default class AdminCuentaComponent {
  fb = inject(FormBuilder);
  form= this.fb.group({
    name:['', [Validators.required]],
    oldPass:['', [Validators.required]],
    newPass:['', [Validators.required]],
    newMail:['', [Validators.required]],    
  })

  handleSubmit(){
    console.log(this.form)
  }
}
