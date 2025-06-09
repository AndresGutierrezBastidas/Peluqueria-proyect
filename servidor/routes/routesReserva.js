import { Router } from "express";
import { crearReserva, obtenerReservas, obtenerReservasPorFecha } from "../controllers/reservaController.js";


const router = Router();

router.get('/getReserva',obtenerReservas);
router.post('/postReserva',crearReserva);
router.get('/getReservasPorFecha/:fecha',obtenerReservasPorFecha);

export default router;

