import { getReservas, createReserva, getReservaValidacionHora } from '../services/reservaService.js';



export async function obtenerReservas(req, res) {
    try {
        const response = await getReservas();
        res.json(response);
    } catch (error) {
        console.log('Error al obtener las reservas', error.message);
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




export async function obtenerReservasPorFecha(req, res) {
    try {
        const fechaParam = req.params.fecha;
        
 
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaParam)) {
            return res.status(400).json({ error: "Formato de fecha debe ser YYYY-MM-DD" });
        }

        const fechaISO = `${fechaParam}T00:00:00`;
        const fecha = new Date(fechaISO);
        
        if (isNaN(fecha.getTime())) {
            return res.status(400).json({ error: "Fecha no válida" });
        }

        const reservas = await getReservaValidacionHora(fechaISO);
        res.json(reservas);
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: error.message || "Error al obtener reservas",
            
        });
    }
}
