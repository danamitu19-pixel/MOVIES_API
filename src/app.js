const express = require('express');
const cors = require('cors');
const moviesRoutes = require('./v1/routes/moviesRoutes');

const app = express();


//Midedleware 
app.use(express.json());
app.use(cors());

//Setup routes www.localhost:3000/api/v1/movies
app.use('/api/v1/movies', moviesRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
