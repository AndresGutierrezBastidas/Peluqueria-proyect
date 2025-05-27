import { Component, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Profesional } from '@interfaces/profesionales.interface';
import { ProfesionalesService } from '@servicios/landingServices/profesionales-services/profesionales.service';
import { response } from 'express';

@Component({
  selector: 'admin-tabla',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-tabla.component.html',
  styleUrl: './admin-tabla.component.css'
})
export default class AdminTablaComponent {
  // Datos de entrada
  datos = input.required<Profesional[]>();

  // Inyecciones y servicios
  profesionales = inject(ProfesionalesService);
  fb = inject(FormBuilder);

  // Señales de estado
  table = signal(false);
  titulos = signal<string[]>([]);
  modalVisible = signal(false);

  // Formulario reactivo
  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
    apellido: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50) ]],
    status: ['', [Validators.required ]],
    otro: ['']
  });

  constructor() {
    effect(() => {
      const d = this.datos();
      if (d.length > 0) {
        this.titulos.set([...Object.keys(d[0]), 'editar']);
      }
    });
  }

  // Control del modal
  openModal() {
    this.modalVisible.set(true);
  }

  closeModal() {
    this.modalVisible.set(false);
  }

  isVisible(open: boolean) {
    this.table.set(open);
  }

  // Envío del formulario
  enviarFormulario() {
    if (this.formulario.valid) {
      const profesional = this.formulario.value;
      this.profesionales.addProfesional(profesional).subscribe({
        next: (response ) => {
          console.log("Profesional creado :", response)
          this.formulario.reset();
        },
        error: (error) => {
           console.error("Error al crear el profesional", error)
        }
      })
      console.log('Formulario enviado:', this.formulario.value);
      this.closeModal();
    } else {
      this.formulario.markAllAsTouched();

    }
  }

  ValidadorCampo(campo:string):boolean{
 const control = this.formulario.get(campo)
 return !!control && control.invalid && (control.dirty || control.touched);
  }
}
