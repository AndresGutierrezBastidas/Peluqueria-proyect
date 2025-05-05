import { FormControl } from "@angular/forms";
import { Horas } from "./horas.interface";
import { Profesional } from "./profesionales.interface";

export interface fsInterface {
    profesional: FormControl<Profesional | null>,
    dia: FormControl<Date | null>,
    horas: FormControl<Horas | null>
}

export interface ssInterface {
    nombre: FormControl<string | null>,
    apellido: FormControl<string | null>,
    email: FormControl<string | null>,
    telefono: FormControl<number | null>
}

