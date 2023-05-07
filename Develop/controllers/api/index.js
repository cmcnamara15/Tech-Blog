const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// need  comment route
router.use('/user', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;