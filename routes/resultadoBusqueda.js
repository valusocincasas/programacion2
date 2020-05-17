const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/resultadoBusquedaController');
router.get('/', controller.resultado);
module.exports = router