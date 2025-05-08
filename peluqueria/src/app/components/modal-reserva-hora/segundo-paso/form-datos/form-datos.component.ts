import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ssInterface } from '@interfaces/forms.interface';

@Component({
  selector: 'form-datos',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './form-datos.component.html',
  styleUrl: './form-datos.component.css'
})
export class FormDatosComponent {
  formGroup = input.required<FormGroup<ssInterface>>()

}
