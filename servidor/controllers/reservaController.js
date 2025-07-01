import { getReservas, createReserva, getReservaValidacionHora, confirmar } from '../services/reservaService.js';
import  prisma  from '../lib/prisma.ts';

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
        res.status(200).json(crearReserva)
    } catch (error) {
        console.log('Error al crear la Reserva', error.message);
        res.status(500).json({  error: error.message });
    }
}




export async function obtenerReservasPorFecha(req, res) {
    try {

        
        const { fecha, profesionalId } = req.params;

        // Validación de fecha
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
            return res.status(400).json({ 
                error: "Formato de fecha inválido",
                mensaje: "Use el formato YYYY-MM-DD",
                ejemplo: "/getReservasPorFecha/2023-12-31/1"
            });
        }

        // Validación de profesionalId
        if (!profesionalId) {
            return res.status(400).json({
                error: "ID de profesional requerido",
                mensaje: "Debe incluir el ID del profesional en la URL",
                ejemplo_correcto: "/getReservasPorFecha/2023-12-31/1"
            });
        }

        const profesionalIdNumero = parseInt(profesionalId);
        if (isNaN(profesionalIdNumero)) {
            return res.status(400).json({ 
                error: "ID de profesional inválido",
                mensaje: "El ID debe ser un número",
                valor_recibido: profesionalId
            });
        }

        // Verificar si existe el profesional
        const profesionalExiste = await prisma.profesional.findUnique({
            where: { id: profesionalIdNumero },
            select: { id: true }
        });

        if (!profesionalExiste) {
            return res.status(404).json({
                error: "Profesional no encontrado",
                id_buscado: profesionalIdNumero,
                mensaje: "Verifique el ID del profesional"
            });
        }

        // Obtener reservas
        const reservas = await getReservaValidacionHora(fecha, profesionalIdNumero);
        
        res.json(reservas || []); // Devuelve array vacío si no hay resultados
        
    } catch (error) {
        console.error('Error en obtenerReservasPorFecha:', error);
        res.status(500).json({ 
            error: "Error interno del servidor",
            detalle: process.env.NODE_ENV === 'development' ? error.message : null
        });
    }
}

export async function confirmarReserva(req, res) {
    try {
        const { token } = req.body;
        const reserva = await confirmar(token);
        res.status(200).json(reserva);
    } catch (error) {
        console.log('Error al confirmar la Reserva', error.message);
        res.status(500).json({ error: error.message });
    }
}