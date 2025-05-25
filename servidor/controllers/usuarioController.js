import { getUsuario, updateUsuario } from  "../services/usuariosServices.js"

export async function obtenerUsuario(req, res) {
    try{
        const response = await getUsuario(parseInt(req.params.id));
        res.json(response)
    } catch (e) {
        console.log('Error al obtener al usuario', e.message);
    }
}
export async function actualizarUsuario(req, res) {
    try{
        const response = await updateUsuario(parseInt(req.params.id),req.body);
        res.json(response)
    } catch (e) {
        console.log('Error al actualizar el usuario', e.message);
    }
}