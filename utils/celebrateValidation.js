const { celebrate, Joi } = require('celebrate');

const signin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const signup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

const postMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(/^https?:\/\//i),
    trailerLink: Joi.string().required().regex(/^https?:\/\//i),
    thumbnail: Joi.string().required().regex(/^https?:\/\//i),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required(),
  }),
});

const patchUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
  }),
});

module.exports = {
  signin,
  signup,
  postMovie,
  deleteMovie,
  patchUser,
};
