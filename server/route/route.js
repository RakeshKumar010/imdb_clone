// Importing required modules
const express = require('express');
const app = express.Router();
const favMovie = require('../schema/favMovie');

// Route to add a favorite movie
app.post('/favmovie', async (req, res) => {
    let result = new favMovie(req.body); // Creating a new movie document
    result = await result.save(); // Saving the document to the database
    res.send(result); // Sending the saved document as a response
});

// Route to update a favorite movie
app.put('/favmovie', async (req, res) => {
    let result = await favMovie.updateOne({_id: req.body._id}, {$set: req.body}); // Updating the movie document in the database
    res.send(result); // Sending the updated document as a response
    console.log(result);
    console.log(req.body._id);
    console.log(req.body.userRating);
});

// Route to delete a favorite movie
app.delete('/favmovie', async (req, res) => {
    const title = req.body.title;
    let result = await favMovie.deleteOne({ title: title }); // Deleting the movie document from the database

    if (!result) {
      res.status(404).send('No movie found with the given title'); // Sending an error message if no movie was found
    } else {
      res.send(result); // Sending the deleted document as a response
    }
});

// Route to get the list of favorite movies
app.get('/favlist', async (req, res) => {
    let result = await favMovie.find(); // Finding all movie documents in the database
    res.send(result); // Sending the list of movies as a response
});

// Default route
app.get('/', (req, res) => {
    res.send({
        name: 'Rakesh Kumar'
    });
});

// Exporting the router
module.exports = app;
