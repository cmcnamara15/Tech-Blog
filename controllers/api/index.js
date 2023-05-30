const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// need comment route
router.use('/users', userRoutes);
router.use('/userPage', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
