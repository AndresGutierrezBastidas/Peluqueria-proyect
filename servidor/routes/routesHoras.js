import { Router } from "express";
import { obtenerHoras } from "../controllers/horasController.js";

const router = Router();


router.get('/getHours', obtenerHoras);

export default router;