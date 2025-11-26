const express = require('express');
const {getAllMovies, getSingleMovie, createMovie, updateMovie, deleteMovie, getMovieByGenre, getMovieSortedByYear} = require('../controllers/moviesController');
const { getAllObjects, addObject,getObjectById,deleteObjectById,updateObjectById, getObjectsByGenre, getObjectsSortedByYear} = require('../data/databaseGeneric');
const router = express.Router();

//GET www.localhost:3002/api/v1/movies/
router.get('/', getAllMovies);

//GET www.localhost:3002/api/v1/movies/genre/Action
router.get('/genre/:genre', getMovieByGenre);

//GET www.localhost:3002/api/v1/movies/sort/year
router.get('/sort/year', getMovieSortedByYear);

//GET www.localhost:3002/api/v1/movies/75
router.get('/:id', getSingleMovie);

//POST www.localhost:3002/api/v1/movies/
router.post('/', createMovie );

//PUT www.localhost:3002/api/v1/movies/75
router.put('/:id',updateMovie );

//DELETE www.localhost:3002/api/v1/movies/75
router.delete('/:id', deleteMovie);




module.exports = router;