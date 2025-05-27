import { getProfesionales, getProfServicio, addProfesionalService } from "../services/profesionalesService.js"

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
export async function addProfesionalController(req,res){
    try{
        const response = await addProfesionalService(req.body)
        res.status(201).json(response);
    }catch(e){
        console.log("Error al intentar agregar un profesional")
    }
}