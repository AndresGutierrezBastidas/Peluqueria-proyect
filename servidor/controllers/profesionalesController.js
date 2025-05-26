import { getProfesionales, getProfServicio, updateProf } from "../services/profesionalesService.js"

export async function obtenerProfesionales(req, res) {
    try{
       const response =  await getProfesionales()
       res.json(response)
    }catch(e){
        console.log('Error al obtener los profesionales', e.message)
    }
}

export async function servicioProfesionales(req, res) {
    try {
        const id = parseInt(req.params.id);

        if(isNaN(id)){
            return res.status(400).json({ error : 'El ID proporcionado no es valido'});
        }

        const response = await getProfServicio(id);
        res.json(response);
    } catch (e) {
        console.log('Error al obtener los profesionales', e.message);
    }
}


export async function actualizarProfesionales(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const profesionalActualizado = await updateProf(id, data);
        
        res.status(200).json({
            message: "Profesional actualizado correctamente",
            data: profesionalActualizado
        });
    } catch (error) {
        console.error("Error en actualizarProfesionales", error.message);
        res.status(500).json({
            message: "Error al actualizar el profesional",
            error: error.message
        });
    }
}