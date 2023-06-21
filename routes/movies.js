const movieRouter = require('express').Router();
const { getFilms, createFilm, deleteFilm } = require('../controllers/movies');
const { postMovie, deleteMovie } = require('../utils/celebrateValidation');

movieRouter.get('/movies', getFilms);
movieRouter.post(
  '/movies',
  postMovie,
  createFilm,
);
movieRouter.delete(
  '/movies/_id',
  deleteMovie,
  deleteFilm,
);

module.exports = { movieRouter };
