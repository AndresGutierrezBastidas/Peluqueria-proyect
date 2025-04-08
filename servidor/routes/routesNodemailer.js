import { Router } from "express";
const router = Router();
import { correo } from "../controllers/nodemailerController.js";

router.post('/enviarCorreo', correo);

export default router;