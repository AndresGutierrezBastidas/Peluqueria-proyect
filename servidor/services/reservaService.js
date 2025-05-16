import  prisma  from '../lib/prisma.ts';
import  prismaExtended  from '../lib/prismaExtended.ts';


 export async function getReservas() {
  try {
    const reservas = await prismaExtended.reserva.findMany({
      omit: {
        clienteId: true,
        horaId: true,
        servicioId: true
      },
      include: {
        cliente: {
          select: {
            fullName: true
          }
        },
        servicio: {
          select: {
            nombre: true,
            servicioprofesional: {
              take: 1, // Solo toma el primer profesional asociado
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

    return reservas;
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