import { Router } from "express";
import { crearReserva, obtenerReservas } from "../controllers/reservaController.js";


const router = Router();

router.get('/getReserva',obtenerReservas);
router.post('/postReserva',crearReserva);

export default router;

