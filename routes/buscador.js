const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/buscadorController');
router.get('/', controller.buscador)
module.exports = router