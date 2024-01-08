// Importing mongoose module
const mongoose = require("mongoose");

// Defining the schema for favorite movies
const favMovie = mongoose.Schema({
  title: String, // Title of the movie
  description: String, // Description of the movie
  poster: String, // Poster URL of the movie
  comment: { type: String, default: 'No comment provided' }, // User comment for the movie, default is 'No comment provided'
  rating: String, // Overall rating of the movie
  userRating: {type:Number,default:0}, // User rating for the movie, default is 0
  vote: String, // Vote count for the movie
  release: String, // Release date of the movie
});

// Exporting the favorite movie model
module.exports = mongoose.model("favorite", favMovie);
