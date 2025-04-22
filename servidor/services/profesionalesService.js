import prisma from '../lib/prisma.js';

export async function getProfesionales() {
    try {
        const profesionales = await prisma.profesional.findMany();
        return profesionales;
    } catch (error) {
        console.error("Error en getProfesionales:", error.message);
        throw error;
    }
}



