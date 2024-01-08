// Importing mongoose module
const mongoose = require('mongoose');

// Getting the database URL from environment variables
const DB = process.env.Database_url;

// Connecting to the database
mongoose.connect(DB)
    .then(() => {
        console.log('Database is connected'); // Logging a success message if the connection is successful
    })
    .catch((err) => {
        console.log('Database is not connected' + err); // Logging an error message if the connection fails
    });
