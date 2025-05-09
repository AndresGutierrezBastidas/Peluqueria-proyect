import prisma from '../lib/prisma.ts';

export async function getProfesionales() {
    try {
        const profesionales = await prisma.profesional.findMany();
        return profesionales;
    } catch (error) {
        console.error("Error en getProfesionales:", error.message);
        throw error;
    }
}


export async function getProfServicio(servicioId){
    try {
        /* RawSql */
        /* const profServicio = await prisma.$queryRaw(prisma.sql`
        SELECT p.* 
        FROM profesional p 
        JOIN servicioprofesional sp ON (sp.profesionalId = p.id)
        WHERE sp.servicioId = ${id}
        GROUP BY p.id`); */

        /* PrismaSql */
        const profServicio = await prisma.profesional.findMany({
            where: {
                serPro:{
                    some:{
                        servicioId: servicioId,
                    }
                }
            },
        });
        return profServicio;
    } catch (error) {
        console.error("Error en getProfServicio", error.message);
        throw error;
    }
}


