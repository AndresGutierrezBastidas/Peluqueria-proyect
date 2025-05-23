import prisma from '../lib/prisma.js';
//Recordar que se debe modificar la tabla usuario
//Falta usuario email o nombre de usuario 
//encriptar la contraseña

export async function getUsuario() {
    try {
        const usuario = await prisma.usuario.findMany();
        return usuario;
    } catch (error) {
        console.error("Error en obtener el usuario:", error.message);
        throw error; 
    }
}