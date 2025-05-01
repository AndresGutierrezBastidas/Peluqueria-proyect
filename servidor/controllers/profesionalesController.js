import { getProfesionales } from "../services/profesionalesService.js"

<<<<<<< HEAD
export async function profesionales(req, res) {
    try{
       const getProfs =  await getProfesionales()
       res.json(getProfs)
=======
export async function obtenerProfesionales(req, res) {
    try{
       const response =  await getProfesionales()
       res.json(response)
>>>>>>> presentacion
    }catch(e){
        console.log('Error al obtener los profesionales', e.message)
    }
}


