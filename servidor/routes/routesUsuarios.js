import { Router } from "express";
import { actualizarUsuario, obtenerUsuario } from "../controllers/usuarioController.js"
const router = Router();


router.get('/getUsuario/:id', obtenerUsuario);
router.put('/putUsuario/:id', actualizarUsuario)
export default router;