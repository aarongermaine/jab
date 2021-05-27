const router = require('express').Router();

const songRoutes = require('./song.js');
const userRoutes = require("./user.js")

router.use('/api', songRoutes);
router.use('/user', userRoutes);


module.exports = router;

