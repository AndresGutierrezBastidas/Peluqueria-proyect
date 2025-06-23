import { Router } from "express";
import { crearReserva, obtenerReservas, obtenerReservasPorFecha, confirmarReserva } from "../controllers/reservaController.js";

const router = Router();

router.get('/getReserva',obtenerReservas);
router.post('/postReserva',crearReserva);
router.get('/getReservasPorFecha/:fecha/:profesionalId',obtenerReservasPorFecha);
router.post('/confirmar', confirmarReserva)

export default router;