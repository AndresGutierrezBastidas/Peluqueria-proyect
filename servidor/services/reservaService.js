import  prisma  from '../lib/prisma.js';
import  prismaExtended  from '../lib/prismaExtended.js';


export async function getReservas() {
    try {
        const reserva = await prismaExtended.reserva.findMany({
            omit: {
                clienteId: true,
                horaId: true,
                servicioId: true
            }, 
            include: {
                cliente: {
                    select: {
                        nombre: true,
                        apellido: true
                    }
                },
                servicio: {
                    select: {
                        nombre: true,
                        precio: true,
                        servicioprofesional: {  // Nombre correcto de la relación
                            select: {
                                profesional: {
                                    select: {
                                        nombre: true
                                    }
                                }
                            }
                        }
                    }
                },
                hora: {
                    select: {
                        hora: true
                    }
                }
            }
        });
        
        // Opcional: Formatear los datos para incluir fullName
        const reservasFormateadas = reserva.map(res => ({
            ...res,
            cliente: {
                fullName: `${res.cliente.nombre} ${res.cliente.apellido}`
            },
            profesional: res.servicio.servicioprofesional[0]?.profesional.nombre || 'No asignado'
        }));
        
        return reservasFormateadas;
    } catch (error) {
        console.error("Error en getReservas:", error.message);
        throw error; 
    }
}

export async function createReserva(datos) {
    console.log("Datos de reserva:", datos);
    
    try {
        const reserva = await prisma.reserva.create({
            data : {
                fechaCreada: new Date().toISOString(),
                fechaReserva: datos.fechaReserva,
                total: datos.total,
                servicioId: datos.servicioId,
                clienteId: datos.clienteId,
                horaId: datos.horaId
            }
        });
        return reserva;
    } catch (error) {
        console.error("Error en createReserva:", datos , error.message);
        throw error; 
    }
    
}