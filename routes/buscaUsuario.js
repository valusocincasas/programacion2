const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/buscaUsuarioController');
router.get('/', controller.buscador);
router.post('/resultadoUsuario', controller.busqueda)
/* router.get('/', controller.vista); 
router.post('/', controller.busqueda); */

module.exports = router





