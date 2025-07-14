import { Router } from "express";
import { iniciarSesion } from "../controllers/usuarioController.js";


const router = Router();


router.post('/login/:email/:password', iniciarSesion);

export default router;
