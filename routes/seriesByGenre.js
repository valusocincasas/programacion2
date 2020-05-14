const express = require ('express');
const router = express.Router ();


const controller = require ('../controllers/seriesByGenreController');
router.get('/', controller.byGenre);
module.exports = router