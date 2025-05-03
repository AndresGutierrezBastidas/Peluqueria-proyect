import  prisma  from '../lib/prisma.js';


export async function getReservas() {

    try {
        const reserva = await prisma.reserva.findMany();
        return reserva;
    } catch (error) {
        
        console.error("Error en getHoras:", error.message);
        throw error; 
        
    }
}

export async function createReserva(datos) {
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
        console.error("Error en createServicio:", datos , error.message);
        throw error; 
    }
    
}