const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/loginController');
router.get('/', controller.login);
router.post('/', controller.processLogin);
router.get ('/reviews', controller.logUser) //formulario de logueo
router.post ('/reviews', controller.confirmUser) //procesa login y redirecciona al listado de mis reseñas
router.get ('/reviews/:id', controller.getReviews)//listado de mis resenias
router.get ('/reviews/edit/:id', controller.showEdit) //formulario para editar una reseña
router.post ('/reviews/edit/:id', controller.confirmEdit) //procesa la edición de una reseña
router.get ('/reviews/delete/:id', controller.deleteReview) //formulario para confirmar eliminación de reseña 
router.post ('/reviews/delete/:id', controller.confirmDelete) //prcoeso que confirma la eliminación 

module.exports = router 