const {getAllObjects, getObjectById, addObject, deleteObjectById, updateObjectById, getObjectsByGenre, getObjectsSortedByYear} = require('../data/databaseGeneric');


const getAllMovies = async(req, res) => {
    try {
        const movies = await getAllObjects();
        res.status(200).json({success: true, data: movies});
        
    } catch (error) {
        res.status(500).json({success: false, error: 'Something went wrong'});

    }
}

const getSingleMovie = async(req, res) => {
    try {
        const movie = await getObjectById(req.params.id);
        res.status(200).json({success: true, data: movie});

    } catch (error) {
        res.status(500).json({success: false, error: 'Something went wrong'});

    }

}

const createMovie = async(req, res) => {
    try {
        const {title, year, genre} = req.body;
        const newMovie = await addObject({title, year, genre}); 
        res.status(201).json({success: true, data: newMovie});

    } catch (error) {
        res.status(500).json({success: false, error: 'Something went wrong'});
    }
}

const updateMovie = async(req, res) => {
    try {
        const {id}  = req.params;
        const {title, year, genre} = req.body;
        const updatedMovie = await updateObjectById(id, {title, year, genre});
        res.status(200).json({success: true, data: updatedMovie});

    }catch (error) {
        res.status(500).json({success: false, error: 'Something went wrong'});

    }
};

const deleteMovie = async(req, res) => {
    try {
        const {id} = req.params;
        const deleted = await deleteObjectById(id);
        res.status(200).json({success: true, message: "Movie deleted successfully"});

    } catch (error) {
        res.status(500).json({success: false, error: "Something went wrong"});
    }
}

const getMovieByGenre = async(req, res) => {
    try {
        const {genre} = req.params;
        const movies = await getObjectsByGenre(genre);
        res.status(200).json({success: true, data: movies});
    } catch (error) {
        res.status(500).json({success: false, error: "Something went wrong"});
    }   
};

const getMovieSortedByYear = async(req, res) => {
    try {
        const movies = await getObjectsSortedByYear();
        res.status(200).json({success: true, data: movies});
    } catch (error) {
        res.status(500).json({success: false, error: "Something went wrong"});
    }  
};



module.exports = {
    getAllMovies,
    getSingleMovie,
    createMovie,
    updateMovie,
    deleteMovie,
    getMovieByGenre,
    getMovieSortedByYear
}

