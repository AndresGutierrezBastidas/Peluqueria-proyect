import prisma from '../lib/prisma.ts';



export async function loginUser(loginEmail, loginPassword){

    try{
        const usuario = prisma.usuario.findFirst({
            where: {
                email: loginEmail,
                password: loginPassword
            }
        })

        return usuario
    }
    catch{

    }

}