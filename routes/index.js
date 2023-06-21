const router = require('express').Router();
const auth = require('../middlewares/auth');
const { authRouter } = require('./authRouter');
const notFoundRouter = require('./notFoundRouter');
const { movieRouter } = require('./movies');
const { userRouter } = require('./users');

router.use('/', authRouter);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('*', notFoundRouter);

module.exports = router;
