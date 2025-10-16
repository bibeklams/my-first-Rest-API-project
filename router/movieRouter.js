const express = require('express');
const movieRouter = express.Router();
const Movie = require('../models/movie');

// GET all movies
movieRouter.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// GET movie by ID
movieRouter.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

// POST create new movie
movieRouter.post('/', async (req, res) => {
  const newMovie = new Movie(req.body);
  await newMovie.save();
  res.json(newMovie);
});

// PUT update movie
movieRouter.put('/:id', async (req, res) => {
  const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updateMovie) return res.status(404).json({ message: "Movie not found" });
  res.json(updateMovie);
});

// DELETE movie
movieRouter.delete('/:id', async (req, res) => {
  const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
  if (!deletedMovie) return res.status(404).json({ message: "Movie not found" });
  res.json({ message: "Movie deleted successfully", movie: deletedMovie });
});

module.exports = movieRouter;
