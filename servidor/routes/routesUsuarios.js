import { Router } from "express";
import { obtenerUsuario } from "../controllers/usuarioController.js"
const router = Router();
router.get('/getUsuario', obtenerUsuario);

export default router;