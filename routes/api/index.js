const router = require("express").Router();
const songRoutes = require("./song");

router.use("/song", songRoutes);

module.exports = router;
