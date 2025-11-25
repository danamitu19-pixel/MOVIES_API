const expresss = require('express');
const {getAllMovies, getSingleMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/moviesController');
const router = expresss.Router();

//GET www.localhost:3002/api/v1/movies/
router.get('/', getAllMovies);

//GET www.localhost:3002/api/v1/movies/75
router.get('/:id', getSingleMovie);

//POST www.localhost:3002/api/v1/movies/
router.post('/', createMovie );

//PUT www.localhost:3002/api/v1/movies/75
router.put('/:id',updateMovie );

//DELETE www.localhost:3002/api/v1/movies/75
router.delete('/:id', deleteMovie);

module.exports = router;