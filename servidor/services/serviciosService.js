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

export async function createServicio(info) {
    try {
        const servicio = await prisma.servicio.create({data:info});
        return servicio;
    } catch (error) {
        console.error("Error en createServicio:",info, error.message);
        throw error; 
    }
}