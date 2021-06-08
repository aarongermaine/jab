const path = require("path");
const router = require("express").Router();

// API Routes


// router.use("/api", require("./api/song"));
// router.use("/user", require("./api/user"));
router.use(require("./api/index.js"))


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
