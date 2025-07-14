import { getHoras } from "../services/horasService.js"

export async function obtenerHoras(req, res) {
    try{
       const response =  await getHoras();
       res.status(200).json(response)
    }catch(e){
       console.log('Error al obtener los profesionales', e.message)
    }
}


