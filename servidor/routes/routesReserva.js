import { Router } from "express";
import { crearReserva, obtenerReserva } from "../controllers/reservaController.js";


const router = Router();

router.get('/getReserva',obtenerReserva);
router.post('/postReserva',crearReserva);

export default router;

