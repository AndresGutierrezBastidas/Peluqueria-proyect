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
                        fullName: true,
                    }
                },
                servicio: {
                    select: {
                        serPro: {
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
                

            }
        });
        return reserva;
    } catch (error) {
        
        console.error("Error en getHoras:", error.message);
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