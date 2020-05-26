var express = require('express');
var router = express.Router();


const controller = require('../controllers/usuariosController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// http://localhost:3000/usuarios
router.get('/index', controller.index);

// http://localhost:3000/usuarios/create
router.get('/create', controller.create);


// http://localhost:3000/usuarios/store
router.post('/store', controller.store);
module.exports = router;