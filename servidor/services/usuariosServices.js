import prisma from '../lib/prisma.js';
//Recordar que se debe modificar la tabla usuario
//Falta usuario email o nombre de usuario 
//encriptar la contraseña

export async function getUsuario(idVar) {
    try {
        const usuario = await prisma.usuario.findUnique({
            where:{
                id:idVar
            }
        });
        console.log(usuario)
        return usuario;
    } catch (error) {
        console.error("Error en obtener el usuario:", error.message);
        throw error; 
    }
}


export async function updateUsuario(idVar, newUser) {
    try {
        const usuario = await prisma.usuario.update({
            where:{
                id:idVar
            },
            data:{
                password:newUser.password
            },
        });
        console.log(usuario)
        return usuario;
    } catch (error) {
        console.error("Error en obtener el usuario:", error.message);
        throw error; 
    }
}