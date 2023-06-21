const authRouter = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { signup, signin } = require('../utils/celebrateValidation');

authRouter.post(
  '/signup',
  signup,
  createUser,
);

authRouter.post(
  '/signin',
  signin,
  login,
);

module.exports = { authRouter };
