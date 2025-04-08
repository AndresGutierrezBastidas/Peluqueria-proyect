import { Router } from "express";
const router = Router();
import { correo } from "../controllers/nodemailerController";

router.post('/enviarCorreo', correo);

export default router;