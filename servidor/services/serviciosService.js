import prisma from '../lib/prisma.js';

export async function getServicios() {
    try {
        const servicios = await prisma.servicio.findMany();
        return servicios;
    } catch (error) {
        console.error("Error en getHoras:", error.message);
        throw error; 
    }
}