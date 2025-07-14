import { Router } from "express";
import { actualizarProfesionales, obtenerProfesionales, servicioProfesionales } from "../controllers/profesionalesController.js";

const router = Router();


router.get('/getProf', obtenerProfesionales);
router.get('/serviceProf/:id', servicioProfesionales);
router.put('/:id',actualizarProfesionales);

export default router;