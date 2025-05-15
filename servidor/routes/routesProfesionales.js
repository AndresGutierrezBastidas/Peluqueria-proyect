import { Router } from "express";
import { obtenerProfesionales, servicioProfesionales } from "../controllers/profesionalesController.js";

const router = Router();

router.get('/getProf', obtenerProfesionales);
router.get('/serviceProf/:id', servicioProfesionales);

export default router;