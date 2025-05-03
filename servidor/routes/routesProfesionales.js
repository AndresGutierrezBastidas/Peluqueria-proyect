import { Router } from "express";
import { profesionales } from "../controllers/profesionalesController.js";
const router = Router();


router.get('/getProf', profesionales);

export default router;