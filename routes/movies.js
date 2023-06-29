const router = require('express').Router();
const { getFilms, createFilm, deleteFilm } = require('../controllers/movies');
const { postMovie, deleteMovie } = require('../utils/celebrateValidation');

router.get('/', getFilms);
router.post(
  '/',
  postMovie,
  createFilm,
);
router.delete(
  '/:movieId',
  deleteMovie,
  deleteFilm,
);

module.exports = router;
