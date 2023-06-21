const { celebrate, Joi } = require('celebrate');
const { validateLink } = require('./validate');

const signin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const signup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(2).max(30),
    password: Joi.string().required(),
  }),
});

const postMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(30),
    director: Joi.string().required().min(2).max(30),
    duration: Joi.number().required(),
    year: Joi.number().required().min(1900).integer(),
    description: Joi.string().required().min(2).max(30),
    image: Joi.string().required().min(2).custom(validateLink),
    trailerLink: Joi.string().required().min(2).custom(validateLink),
    thumbnail: Joi.string().required().min(2).custom(validateLink),
    movieId: Joi.string().required().length(24).hex(),
    nameRU: Joi.string().required().min(2).max(30),
    nameEN: Joi.string().required().min(2).max(30),
  }),
});

const deleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number().required(),
  }),
});

const patchUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports = {
  signin,
  signup,
  postMovie,
  deleteMovie,
  patchUser,
};
