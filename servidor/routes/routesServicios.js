import { Router } from "express";
import { obtenerServicios } from "../controllers/serviciosController.js";


const router = Router();


router.get('/getServices', obtenerServicios);

export default router;