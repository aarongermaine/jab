const router = require("express").Router();
const songController = require("../../controllers/songController");

router.route("/").get(songController.findAll).post(songController.create);

router
  .route("/:id")
  .get(songController.findById)
  .put(songController.update)
  .delete(songController.remove);

module.exports = router;
