// Importing required modules
const express = require('express'); // Express.js for creating the server
const cors = require('cors'); // CORS for handling Cross-Origin Resource Sharing
const dotenv = require('dotenv'); // dotenv for managing environment variables

// Configuring dotenv to use environment variables from 'config.env' file
dotenv.config({ path: './config.env' });

// Connecting to the database
require('./db/conn');

// Creating an Express application
const app = express();

// Applying middlewares
app.use(cors()); // Enabling CORS
app.use(express.json()); // Enabling parsing of JSON data
app.use(require('./route/route')); // Using the routes defined in 'route.js'

// Setting up the server
const PORT =8000 || process.env.PORT; // Defining the port to be used
app.listen(PORT, () => { // Starting the server
    console.log(`Server is running at http://localhost:${PORT}`);
});
