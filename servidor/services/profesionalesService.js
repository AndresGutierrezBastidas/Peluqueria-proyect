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
                servicioprofesional:{
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


export async function updateProf(id, profesional) {
    try {
        const updateProfesionales = await prisma.profesional.update({
            where: { id: id },
            data: profesional // CORRECCIÓN: No debe estar anidado en otro objeto
        });
        return updateProfesionales;
    } catch (error) {
        console.error("Error en updateProf", error.message);
        throw error;
    }

}   
export async function addProfesionalService(data) {
  try {
    const { nombre  } = data;

    const nuevoProfesional = await prisma.profesional.create({
      data: {
        nombre
      }
    });

    return nuevoProfesional;
  } catch (error) {
    console.error("Error al crear profesional:", error);

    throw error;
  }
}