import { getProfesionales } from "../services/profesionalesService.js"

export async function profesionales(req, res) {
    try{
       const getProfs =  await getProfesionales()
       res.json(getProfs)
    }catch(e){
        console.log('Error al obtener los profesionales', e.message)
    }
}