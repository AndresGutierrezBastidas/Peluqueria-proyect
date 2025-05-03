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

export async function getProfServicio(id){
    try {
        const profServicio = await prisma.$queryRaw(prisma.sql`
        SELECT p.* 
        FROM profesional p 
        JOIN servicio s ON (s.id = p.id)
        WHERE s.id = ${id}
        GROUP BY p.id`);
        return profServicio
    } catch (error) {
        console.error("Error en getProfServicio", error.message);
        throw error;
    }
}

