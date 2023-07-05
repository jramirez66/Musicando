const express = require("express");

const mainController = require("../controllers/mainController.js");

const router = express.Router();

router.get('/canciones', mainController.canciones);
router.post('/canciones', mainController.cancionesCrear);
router.get('/canciones/:id', mainController.cancionesObtener);
router.put('/canciones/:id', mainController.cancionesEditar);
router.delete('/canciones/:id', mainController.cancionesEliminar);
router.get('/generos', mainController.generos);

module.exports = router;