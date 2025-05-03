import { Router } from "express";
<<<<<<< HEAD
import { obtenerServicios } from "../controllers/serviciosController.js";
=======
import { obtenerServicios, agregarServicios } from "../controllers/serviciosController.js";
>>>>>>> ManuelAPIBD


const router = Router();


router.get('/getServices', obtenerServicios);
<<<<<<< HEAD
=======
router.post('/createServices', agregarServicios);
>>>>>>> ManuelAPIBD

export default router;