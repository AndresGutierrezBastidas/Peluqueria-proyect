import { Reserva } from "@interfaces/reserva.interface";

// Función adapter genérica (si aún la necesitas)
export const adapter = <T>(objects: T[]): T[] => {
    return objects.map((object: T) => ({...object}));
}

// Función adapter específica para Reserva
export const adapterReserva = (reservas: any[]): Reserva[] => {
  return reservas.map(reserva => ({
    id: reserva.id,
    fechaCreada: new Date(reserva.fechaCreada),
    fechaReserva: new Date(reserva.fechaReserva),
    total: reserva.total,
    cliente_fullname: `${reserva.cliente.nombre} ${reserva.cliente.apellido}`,
    servicio_nombre: reserva.servicio.nombre,
    profesional_nombre: reserva.servicio.servicioprofesional[0]?.profesional.nombre || 'Sin asignar',
    hora_reserva: reserva.hora.hora
  }));
}


