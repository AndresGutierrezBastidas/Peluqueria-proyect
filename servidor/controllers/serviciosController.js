<<<<<<< HEAD
import { getServicios } from "../services/serviciosService.js"
=======
import { createServicio, getServicios } from "../services/serviciosService.js"
>>>>>>> ManuelAPIBD


export async function obtenerServicios(req, res) {
    try{
       const response =  await getServicios();
       res.json(response)
    }catch(e){
<<<<<<< HEAD
        console.log('Error al obtener los profesionales', e.message)
=======
        console.log('Error al obtener los Servicios', e.message);
    }
}


export async function agregarServicios(req, res) {
    try {
        const datos = req.body;
        const servicioCreado = await createServicio(datos);
        res.status(201).json(servicioCreado);
    } catch (error) {
        console.error("Error en createServicio:", error.message);
        res.status(500).json({  error: error.message });
>>>>>>> ManuelAPIBD
    }
}


