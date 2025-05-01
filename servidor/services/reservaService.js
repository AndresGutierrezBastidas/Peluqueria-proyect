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