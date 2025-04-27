import { Router } from "express";
import { obtenerServicios, agregarServicios } from "../controllers/serviciosController.js";


const router = Router();


router.get('/getServices', obtenerServicios);
router.post('/createServices', agregarServicios);

export default router;