import { Router } from "express";
import { obtenerReserva } from "../controllers/reservaController.js";


const router = Router();

router.get('/getReserva',obtenerReserva);

export default router;

