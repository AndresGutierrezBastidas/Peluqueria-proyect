import  prisma  from '../lib/prisma.js';
import  prismaExtended  from '../lib/prismaExtended.js';

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
                  nombre: true,
                  apellido: true
                }
              },
              servicio: {
                select: {
                  nombre: true,
                  serPro: {
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
        
        console.error("Error en getHoras:", error.message);
        throw error; 
        
    }
}

export async function createReserva(datos) {
    // Verificar si el usuario ya existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: {
        email: datos.cliente.email
      }
    });
    let data = {};
    if (clienteExistente) {
      data = {
        ...datos.reserva,
        clienteId: clienteExistente.id
      };
    } else {
      data = {
        fechaReserva: datos.reserva.fechaReserva,
        total: datos.reserva.total,
        servicio: {
          connect: {
            id: datos.reserva.servicioId
          }
        },
        hora: {
          connect: {
            id: datos.reserva.horaId
          }
        },
        cliente: {
          create: {
            nombre: datos.cliente.nombre,
            apellido: datos.cliente.apellido,
            email: datos.cliente.email
          }
        }
      };
    }    
    try {
        const reserva = await prisma.reserva.create({data});
        return reserva;
    } catch (error) {
        console.error("Error en createReserva:", data , error.message);
        throw error; 
    }
    
}