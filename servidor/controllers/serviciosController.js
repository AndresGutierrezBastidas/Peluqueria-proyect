import { getServicios } from "../services/serviciosService.js"


export async function obtenerServicios(req, res) {
    try{
       const response =  await getServicios();
       res.json(response)
    }catch(e){
        console.log('Error al obtener los profesionales', e.message)
    }
}


