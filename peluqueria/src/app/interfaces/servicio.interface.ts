
export interface Servicio {
  descripcion: string;
  id: number;
  nombre: string;
  precio: number;
  profesionalId: number;
}


// `id` INTEGER NOT NULL AUTO_INCREMENT,
//     `nombre` VARCHAR(30) NOT NULL,
//     `precio` INTEGER NOT NULL,
//     `descripcion` VARCHAR(500) NOT NULL,
//     `profesionalId` INTEGER NOT NULL,
