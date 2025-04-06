const express = require("express");
const router = express.Router();
const controllerNode = require("../controllers/nodemailerController");

router.post('/enviarCorreo', controllerNode.correo);

module.exports = router;