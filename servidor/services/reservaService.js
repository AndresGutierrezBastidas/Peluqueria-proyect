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

export async function getReservaValidacionHora(fechaISO) {
      try {
        
          const fecha = new Date(fechaISO);
          if (isNaN(fecha.getTime())) {
              throw new Error("Fecha no válida proporcionada");
          }

   
          const fechaInicio = new Date(fecha);
          fechaInicio.setUTCHours(0, 0, 0, 0);

          const fechaFin = new Date(fechaInicio);
          fechaFin.setUTCDate(fechaFin.getUTCDate() + 1);

  
          const result = await prisma.hora.findMany({
          select: {
            id: true,
            hora: true,
            Reserva: {
              where: {
              fechaReserva: {
                      gte: fechaInicio,
                      lt: fechaFin
                  }
              },
              
              /* include: {
                servicio: {
                  select: {
                    serPro: {
                      where: {
                        profesionalId: profesionalID
                      },
                    }
                  }
                }
              }, */
              select: {
                horaId: true

              }
            }
          }
        });

      const formattedResult = result.map(hora => ({
        id: hora.id,
        hora: hora.hora,
        tomado: hora.Reserva.length > 0 ? true : false
      }));
          
      return formattedResult;
      } catch (error) {
          console.error("Error en getReservaValidacion:", error);
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