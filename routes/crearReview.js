const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/crearReviewController');
router.post('/crearReview', reviewsController.create);


module.exports = router