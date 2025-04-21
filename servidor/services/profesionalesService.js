import prisma from '../lib/prisma.js';

export async function getProfesionales(req, res) {
    try {
    const profesionales = await prisma.profesional.findMany();
    return res.json(profesionales)
    } catch (error) {
    res.status(500).send('Erro al obtener profesionales')
    console.log(error);
    }
}
