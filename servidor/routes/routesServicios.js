import { Router } from "express";
import { obtenerServicios, agregarServicios, actualizarServicio } from "../controllers/serviciosController.js";


const router = Router();


router.get('/getServices', obtenerServicios);
router.post('/createServices', agregarServicios);
router.put('/edit/:id',actualizarServicio)

export default router;