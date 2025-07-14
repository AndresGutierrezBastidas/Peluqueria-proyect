import  prisma  from '../lib/prisma.ts';
import  prismaExtended  from '../lib/prismaExtended.ts';
import crypto from 'crypto';
import { correo } from '../services/nodemailerController.js';

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

export async function getReservaValidacionHora(fecha, profesionalId) {
    try {
        const fechaDate = new Date(fecha);
        if (isNaN(fechaDate.getTime())) {
            throw new Error("Fecha no válida");
        }

        const horas = await prisma.hora.findMany({
            orderBy: { hora: 'asc' },
            select: {
                hora: true,
                id: true,
                Reserva: {
                    where: {
                        fechaReserva: fechaDate,
                        confirmada: true,
                        servicioprofesional: {
                            profesionalId: profesionalId
                        }
                    },
                    select: { id: true }
                }
            }
            
        });

        return horas.map(hora => ({
            id: hora.id,
            hora: hora.hora,
            profesional_id: profesionalId,
            tomado: hora.Reserva.length > 0
        }));

    } catch (error) {
        console.error("Error en getReservaValidacionHora:", error);
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
    
    const token = crypto.randomBytes(32).toString('hex');

    let data = {};
    if (clienteExistente) {
      data = {
        ...datos.reserva,
        clienteId: clienteExistente.id,
        token: token
      };
    } else {
      data = {
        fechaReserva: datos.reserva.fechaReserva,
        total: datos.reserva.total,
        token: token,
        servicioprofesional: {
          connect: {
            id: datos.reserva.servicioprofesionalId
          }
        },
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
        if (reserva){
          /* Correo de confirmación */
          await correo("1", datos.cliente.email, token)
        }
        return reserva;
    } catch (error) {
        console.error("Error en createReserva:", data , error.message);
        throw error; 
    }
    
}

export async function confirmar(token) {
    try {      
      const reserva = await prisma.reserva.findFirst({
        select: {
          id: true,
          token: true,
          confirmada: true,
          cliente: {
            select: {
              email: true
            }
          }
        },
        where: {
          token: token
        }
      })
      if(!reserva) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }

      if (reserva.confirmada) {
        // Ya estaba confirmada, no enviar correo de nuevo
        return res.status(200).json({ message: 'Reserva ya confirmada' });
      }

      const updateReserva = await prisma.reserva.update({
        where: {
          token: reserva.token,
          id: reserva.id
        },
        data: {
          confirmada: true
        }
      }).catch((error) =>{
        console.error("Error en updateReserva:", error.message);
        throw error;
      })
      
      if(updateReserva){
        await correo("2", reserva.cliente.email, reserva.token)
      }
      return updateReserva;
    } catch (error) {
      
    }
}