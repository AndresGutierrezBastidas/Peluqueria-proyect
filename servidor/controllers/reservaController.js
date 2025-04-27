import { getReservas } from '../services/reservaService.js';



export async function obtenerReserva(req, res) {
    try {
        const response = await getReservas();
        res.json(response);
    } catch (error) {
        console.log('Error al obtener los Servicios', error.message);
    }
}


