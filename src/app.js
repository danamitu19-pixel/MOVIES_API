const express = require('express');
const movieRoutes = require('./v1/routes/moviesRoutes');

const app = express();
const cors = require('cors');

//Midedleware 
app.use(express.json());
app.use(cors());

//Setup routes www.localhost:3002/api/v1/movies
app.use('/api/v1/movies', movieRoutes );



app.listen(3002, () => {
    console.log('Server is running on port 3002');
})
