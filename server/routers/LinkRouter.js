const express = require("express");
const router = express.Router();
const linkController = require("../controllers/LinkController");

router.get("/", linkController.get);
router.post("/", linkController.create);
router.get("/:slug", linkController.getByLink);

module.exports = router;
