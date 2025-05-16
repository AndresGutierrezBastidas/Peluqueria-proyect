import { getReservas, createReserva } from '../services/reservaService.js';



export async function obtenerReservas(req, res) {
    try {
        const response = await getReservas();
        res.json(response);
    } catch (error) {
        console.log('Error al obtener los Servicios', error.message);
    }
}

export async function crearReserva(req, res) {
    try {
        const reserva = req.body;
        const crearReserva = await createReserva(reserva);
        res.status(201).json(crearReserva)
    } catch (error) {
        console.log('Error al crear la Reserva', error.message);
        res.status(500).json({  error: error.message });
    }
}