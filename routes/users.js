const router = require('express').Router();
const { getProfile, createUser, updateUser } = require('../controllers/users');
const { patchUser } = require('../utils/celebrateValidation');

router.get('/me', getProfile);
router.post('/me', createUser);
router.patch(
  '/me',
  patchUser,
  updateUser,
);

module.exports = router;
