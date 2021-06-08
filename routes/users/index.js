const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/", userRoutes);

router.get("/", (req, res) => res.json());

module.exports = router;
