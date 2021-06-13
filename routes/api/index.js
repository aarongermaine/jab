const router = require("express").Router();

const songRoutes = require("./song.js");

router.use("/api", songRoutes);

module.exports = router;
