import { getProfesionales } from "../services/profesionalesService.js"

export async function obtenerProfesionales(req, res) {
    try{
       const response =  await getProfesionales()
       res.json(response)
    }catch(e){
        console.log('Error al obtener los profesionales', e.message)
    }
}


