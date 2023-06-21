const userRouter = require('express').Router();
const { getProfile, createUser, updateUser } = require('../controllers/users');
const { patchUser } = require('../utils/celebrateValidation');

userRouter.get('/users/me', getProfile);
userRouter.post('/users', createUser);
userRouter.patch(
  '/users/me',
  patchUser,
  updateUser,
);

module.exports = { userRouter };
