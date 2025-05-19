import { Router } from "express";
import { obtenerProfesionales, servicioProfesionales, addProfesionalController } from "../controllers/profesionalesController.js";


const router = Router();


router.get('/getProf', obtenerProfesionales);
router.get('/serviceProf/:id', servicioProfesionales);
router.post('/addProfesional', addProfesionalController)

export default router;