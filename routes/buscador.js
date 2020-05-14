const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/buscadorController');
router.get('/buscador', controller.buscador);
module.exports = router