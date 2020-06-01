const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/buscaUsuarioController');
router.get('/', controller.busqueda);
/* router.get('/', controller.vista); 
router.post('/', controller.busqueda); */

module.exports = router





