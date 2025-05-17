import { Router } from "express";
import { crearReserva, obtenerReservas } from "../controllers/reservaController.js";
import { correo } from "../controllers/nodemailerController.js";

const router = Router();

router.get('/getReserva',obtenerReservas);
router.post('/postReserva',crearReserva);
router.post('/enviarCorreo', correo);

export default router;