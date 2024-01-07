const mongoose = require("mongoose");
const favMovie = mongoose.Schema({
  title: String,
  description: String,
  poster: String,
  comment: { type: String, default: 'No comment provided' },
  rating: String,
  userRating: {type:Number,default:0},
  vote: String,
  release: String,
});

module.exports = mongoose.model("favorite", favMovie);
