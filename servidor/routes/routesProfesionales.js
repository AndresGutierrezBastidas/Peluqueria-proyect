import { Router } from "express";
<<<<<<< HEAD
import { profesionales } from "../controllers/profesionalesController.js";
const router = Router();


router.get('/getProf', profesionales);
=======
import { obtenerProfesionales } from "../controllers/profesionalesController.js";

const router = Router();


router.get('/getProf', obtenerProfesionales);
>>>>>>> presentacion

export default router;