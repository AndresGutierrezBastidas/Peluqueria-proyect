import { Router } from "express";
import { crearReserva, obtenerReservas, confirmarReserva } from "../controllers/reservaController.js";

const router = Router();

router.get('/getReserva',obtenerReservas);
router.post('/postReserva',crearReserva);
router.post('/confirmar', confirmarReserva)

export default router;