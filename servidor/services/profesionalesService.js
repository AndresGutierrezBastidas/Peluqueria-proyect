import prisma from '../lib/prisma.js';

export async function getProfesionales() {
    const profesionales = await prisma.profesional.findMany();
    return profesionales
}



