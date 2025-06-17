import prisma from '../lib/prisma.ts';



export async function getServicios() {
    try {
        const servicios = await prisma.servicio.findMany();
        return servicios;
    } catch (error) {
        console.error("Error en getHoras:", error.message);
        throw error; 
    }
}

export async function createServicio(info) {
    try {
        const servicio = await prisma.servicio.create({data:info});
        return servicio;
    } catch (error) {
        console.error("Error en createServicio:",info, error.message);
        throw error; 
    }
}

export async function updateServ(id,servicio) {
    
    try {
        const updateServicio = await prisma.servicio.update({
            where: {id: id},
            data: {
                nombre: servicio.nombre,
                precio: servicio.precio,
                descripcion: servicio.descripcion
            }
        });
        return updateServicio;
    } catch (error) {
        console.error("Error en updateServ", error.message);
        throw error;
    }
}