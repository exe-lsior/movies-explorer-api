const Movie = require('../models/movie');
const NotFoundError = require('../errors/notFoundError');
const ForbiddenError = require('../errors/forbiddenError');
const BadRequestError = require('../errors/badRequestError');

module.exports.getFilms = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .populate(['owner'])
    .then((films) => {
      res.send(films);
    })
    .catch(next);
};

module.exports.createFilm = (req, res, next) => {
  Movie.create({
    ...req.body, owner: req.user._id,
  })
    .then((filmItem) => res.send(filmItem))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

module.exports.deleteFilm = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(new NotFoundError('Такого фильма не существует'))
    .then((film) => {
      if (film.owner._id.toString() !== req.user._id) {
        return Promise.reject(new ForbiddenError('Недостаточно прав'));
      }
      return film.deleteOne({ _id: film._id });
    })
    .then((film) => res.send(film))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Переданы некорректные данные'));
      }
      return next(err);
    });
};
