const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: String,
    unique: false,
    required: true,
  },
  genre: {
    type: String,
    unique: false,
    required: true,
  },
  releaseYear: {
    type: Number,
    unique: false,
    required: true,
  },
  seen: {
    type: Boolean,
    unique: false,
    required: true,
  },
  runTime: {
    type: Number,
    unique: false,
    required: true,
  }
});

module.exports = moviesSchema;
