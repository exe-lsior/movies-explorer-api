const router = require('express').Router();
const auth = require('../middlewares/auth');
const { authRouter } = require('./authRouter');
const movieRouter = require('./movies');
const userRouter = require('./users');
const notFoundRouter = require('./notFoundRouter');

router.use('/', authRouter);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('*', notFoundRouter);

module.exports = router;
