import prisma from '../lib/prisma.js';

export async function getHoras() {
    try {
        const horas = await prisma.hora.findMany();
        return horas;
    } catch (error) {
        console.error("Error en getHoras:", error.message);
        throw error; 
    }
}