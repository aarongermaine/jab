const router = require("express").Router();
const songController = require("../../controllers/songController");
const authController = require("../../controllers/authController");

router.route("/").get(songController.findAll).post(songController.create);

router.route("/login").get(authController.findall);

router
  .route("/:id")
  .get(songController.findById)
  .put(songController.update)
  .delete(songController.remove);

module.exports = router;
