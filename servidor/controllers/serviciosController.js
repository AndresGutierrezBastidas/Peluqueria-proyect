import { createServicio, getServicios, updateServ } from "../services/serviciosService.js"


export async function obtenerServicios(req, res) {
    try{
       const response =  await getServicios();
       res.status(200).json(response)
    }catch(e){
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
    }
}


// controllers/serviciosController.js
export async function actualizarServicio(req, res) {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID debe ser un número válido" });
        }
        
        const data = req.body;
        const servicioActualizado = await updateServ(id, data); // Corregido a updateServ
        
        res.status(200).json({
            message: "Servicio actualizado correctamente",
            data: servicioActualizado
        });
    } catch (error) {
        console.error("Error en actualizarServicio", error.message);
        res.status(500).json({
            message: "Error al actualizar el servicio",
            error: error.message
        });
    }
}


