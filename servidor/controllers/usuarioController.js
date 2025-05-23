import { getUsuario } from  "../services/usuariosServices.js"

export async function obtenerUsuario(req, res) {
    try{
        const response = await getUsuario();
        res.json(response)
    } catch (e) {
        console.log('Error al obtener los profesionales', e.message);
    }
}