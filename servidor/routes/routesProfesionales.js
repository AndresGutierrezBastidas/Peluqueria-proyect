import { Router } from "express";
import { obtenerProfesionales } from "../controllers/profesionalesController.js";
const router = Router();


router.get('/getProf', obtenerProfesionales);

export default router;