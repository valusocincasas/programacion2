var express = require('express');
var router = express.Router();

const controller = require ('../controllers/modulo-loginController');
router.get('/chequear', controller.chequearUsuario);
router.get('/buscar', controller.buscarPorEmail);
router.get('/validar', controller.validar);

module.exports = router;
