import { FormControl } from "@angular/forms";

export interface fsInterface {
    profesional: FormControl<number | null>,
    dia: FormControl<Date | null>,
    horas: FormControl<number | null>
}

export interface ssInterface {
    nombre: FormControl<string | null>,
    apellido: FormControl<string | null>,
    email: FormControl<string | null>,
    telefono: FormControl<number | null>
}

