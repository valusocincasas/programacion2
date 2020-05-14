const express = require ('express');
const router = express.Router ();
router.get ('/buscador.ejs');

const controller = require ('../controllers/buscadorController');
router.get('/buscador', controller.buscador)
module.exports = router