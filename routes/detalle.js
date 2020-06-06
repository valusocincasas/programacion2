const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/reviewsController');
router.get('/', controller.detail);
router.post('/', controller.create);


module.exports = router 