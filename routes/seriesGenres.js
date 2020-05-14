const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/seriesGenresController');
router.get('/', controller.genres);
module.exports = router