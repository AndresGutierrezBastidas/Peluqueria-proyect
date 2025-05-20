import {getUsuario} from  "../services/usuariosServices.js"

export async function obtenerUsuario(req, res) {
    try {
        const id = parseInt(req.params.usuarioid);

        if(isNaN(id)){
            return res.status(400).json({ error : 'El ID proporcionado no es valido'});
        }

        const response = await getUsuario(id);
        res.json(response);
    } catch (e) {
        console.log('Error al obtener los profesionales', e.message);
    }
}